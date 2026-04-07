import { lazy, Suspense, useEffect, useRef, useState } from "react";
import "./App.css";

const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

const TOTAL_FRAMES = 120;

const App = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const [currentFrame, setCurrentFrame] = useState(0);
  const imagesRef = useRef<{ [key: number]: HTMLImageElement }>({});

  // Preload all frames
  useEffect(() => {
    const loadFrames = async () => {
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        img.src = `/frames/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;
        imagesRef.current[i - 1] = img;
      }
    };
    loadFrames();
  }, []);

  // Handle scroll to update frame
  useEffect(() => {
    const handleScroll = () => {
      // Adjust threshold based on device width
      const isMobile = window.innerWidth < 768;
      const scrollThreshold = isMobile ? window.innerHeight * 2.5 : window.innerHeight * 1.8; // Show animation longer on mobile

      // Update canvas visibility
      if (canvasContainerRef.current) {
        if (window.scrollY > scrollThreshold) {
          canvasContainerRef.current.classList.add("hidden");
        } else {
          canvasContainerRef.current.classList.remove("hidden");
        }
      }

      // Only animate canvas until threshold
      if (window.scrollY < scrollThreshold) {
        const scrollProgress = scrollThreshold > 0 ? window.scrollY / scrollThreshold : 0;
        const frameIndex = Math.min(
          Math.floor(scrollProgress * TOTAL_FRAMES),
          TOTAL_FRAMES - 1
        );
        setCurrentFrame(frameIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Draw current frame on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[currentFrame];
    if (img && img.complete) {
      // Set canvas size to match image
      if (canvas.width !== img.width || canvas.height !== img.height) {
        canvas.width = img.width;
        canvas.height = img.height;
      }
      ctx.drawImage(img, 0, 0);
    }
  }, [currentFrame]);

  return (
    <>
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <div className="hero-canvas-container" ref={canvasContainerRef}>
              <canvas
                ref={canvasRef}
                className="hero-canvas"
                width={1920}
                height={1080}
              />
            </div>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;

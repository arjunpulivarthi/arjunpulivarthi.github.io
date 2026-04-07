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

  // Draw a frame on the canvas
  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = imagesRef.current[frameIndex];
    if (img && img.complete) {
      if (canvas.width !== img.width || canvas.height !== img.height) {
        canvas.width = img.width;
        canvas.height = img.height;
      }
      ctx.drawImage(img, 0, 0);
    }
  };

  // Preload all frames - draw frame 0 immediately when it loads
  useEffect(() => {
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.onload = () => {
        // Draw first frame immediately so hero isn't black
        if (i === 1) drawFrame(0);
      };
      img.src = `/frames/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;
      imagesRef.current[i - 1] = img;
    }
  }, []);

  // Handle scroll to update frame
  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      const scrollThreshold = isMobile ? window.innerHeight * 2.5 : window.innerHeight * 1.8;

      // Update canvas visibility - only hide after threshold
      if (canvasContainerRef.current) {
        if (window.scrollY > scrollThreshold) {
          canvasContainerRef.current.classList.add("hidden");
        } else {
          canvasContainerRef.current.classList.remove("hidden");
        }
      }

      // Animate canvas - map scroll to frame
      if (window.scrollY <= scrollThreshold) {
        const scrollProgress = window.scrollY / scrollThreshold;
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

  // Draw current frame on canvas when it changes
  useEffect(() => {
    drawFrame(currentFrame);
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

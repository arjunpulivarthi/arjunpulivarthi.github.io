import { lazy, Suspense, useEffect, useRef } from "react";
import "./App.css";

const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const portraitEl = portraitRef.current;
      if (portraitEl) {
        if (scrollY > 100) {
          portraitEl.classList.add("scrolled");
        } else {
          portraitEl.classList.remove("scrolled");
        }

        // Parallax effect - move slower than page scroll
        const parallaxOffset = scrollY * 0.5;
        portraitEl.style.transform = `translateX(-50%) translateY(${parallaxOffset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <div className="hero-portrait" ref={portraitRef}>
              <img
                src="/images/arjun-portrait.webp"
                alt="Arjun Pulivarthi"
              />
            </div>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Halo text: white + mix-blend-difference inverts per-pixel against the page
 * (halo-based, including splits over light/dark edges).
 *
 * Framer `x` / `y` / `scale` use CSS `transform` on the wrapper. That promotes
 * the halo into its own composited layer, and in Chromium/WebKit the blended
 * SVG then often samples the wrong backdrop (looks like white-on-white).
 * Fix: position this wrapper with `left` / `top` only, avoid transform on any
 * ancestor of the blended SVG; rotate via SVG `transform` attribute on `<g>`.
 */
const cursorConfig = {
  outerCircleDiameter: 175,
  innerDotSize: 10,
  innerDotColor: "#0D9488",

  ringStroke: "rgba(13, 148, 136, 0.55)",
  ringStrokeWidth: 2.25,
  ringRadiusInset: 2,

  rotationSpeed: 1,
  springStiffness: 150,
  springDamping: 30,
  /** Hover feedback without CSS transform (keeps mix-blend backdrop = page) */
  hoverDimOpacity: 0.45,

  text: "Portfolio • Showcase • Jemuel • WebDev •",
  textSize: 19,
  textLetterSpacing: 3,
  textFontWeight: 800,
};

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const isHTMLElement = element instanceof HTMLElement;
        const isInteractive =
          element.tagName === "A" ||
          element.tagName === "BUTTON" ||
          !!element.closest("a") ||
          !!element.closest("button") ||
          !!element.closest('[role="button"]') ||
          !!element.closest('[class*="hover"]') ||
          (isHTMLElement && element.style.cursor === "pointer") ||
          window.getComputedStyle(element).cursor === "pointer";
        setIsHovering(!!isInteractive);
      }
    };

    const rotateInterval = setInterval(() => {
      setRotation((prev) => (prev + cursorConfig.rotationSpeed) % 360);
    }, 20);

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      clearInterval(rotateInterval);
    };
  }, []);

  const prefersFinePointer =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: fine)").matches;

  if (!prefersFinePointer) {
    return null;
  }

  const d = cursorConfig.outerCircleDiameter;
  const radius = d / 2;
  const centerOffset = radius - 5;
  const ringR = radius - cursorConfig.ringRadiusInset;
  const left = mousePosition.x - radius;
  const top = mousePosition.y - radius;

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        initial={false}
        animate={{
          left,
          top,
        }}
        transition={{
          type: "spring",
          stiffness: cursorConfig.springStiffness,
          damping: cursorConfig.springDamping,
          mass: 0.1,
        }}
        style={{
          width: `${d}px`,
          height: `${d}px`,
          borderRadius: "50%",
          backgroundColor: "transparent",
          border: "1.5px solid rgba(13, 148, 136, 0.4)",
          boxShadow: "0 0 28px rgba(13, 148, 136, 0.22)",
        }}
      >
        <svg
          className="absolute inset-0 overflow-visible pointer-events-none"
          width={d}
          height={d}
          viewBox={`0 0 ${d} ${d}`}
          aria-hidden
        >
          <defs>
            <path
              id="cursor-circle-path"
              d={`M ${radius}, ${radius} m -${centerOffset}, 0 a ${centerOffset},${centerOffset} 0 1,1 ${
                centerOffset * 2
              },0 a ${centerOffset},${centerOffset} 0 1,1 -${
                centerOffset * 2
              },0`}
              fill="none"
            />
          </defs>
          <circle
            cx={radius}
            cy={radius}
            r={ringR}
            fill="none"
            stroke={cursorConfig.ringStroke}
            strokeWidth={cursorConfig.ringStrokeWidth}
          />
        </svg>

        <svg
          className="absolute inset-0 overflow-visible pointer-events-none mix-blend-difference"
          width={d}
          height={d}
          viewBox={`0 0 ${d} ${d}`}
          aria-hidden
          style={{
            opacity: isHovering ? cursorConfig.hoverDimOpacity : 1,
            transition: "opacity 0.2s ease-out",
          }}
        >
          <defs>
            <path
              id="cursor-circle-path-blend"
              d={`M ${radius}, ${radius} m -${centerOffset}, 0 a ${centerOffset},${centerOffset} 0 1,1 ${
                centerOffset * 2
              },0 a ${centerOffset},${centerOffset} 0 1,1 -${
                centerOffset * 2
              },0`}
              fill="none"
            />
          </defs>
          <g transform={`rotate(${rotation} ${radius} ${radius})`}>
            <text
              fill="#ffffff"
              fontSize={cursorConfig.textSize}
              fontWeight={cursorConfig.textFontWeight}
              letterSpacing={cursorConfig.textLetterSpacing}
            >
              <textPath href="#cursor-circle-path-blend" startOffset="0%">
                {cursorConfig.text}
              </textPath>
            </text>
          </g>
        </svg>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - cursorConfig.innerDotSize / 2,
          y: mousePosition.y - cursorConfig.innerDotSize / 2,
          scale: isHovering ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.1,
        }}
        style={{
          width: `${cursorConfig.innerDotSize}px`,
          height: `${cursorConfig.innerDotSize}px`,
          borderRadius: "50%",
          backgroundColor: cursorConfig.innerDotColor,
        }}
      />
    </>
  );
};

export default CustomCursor;

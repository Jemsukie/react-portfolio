import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Cursor configuration - easily customizable
const cursorConfig = {
  // Size settings
  outerCircleDiameter: 175, // Diameter of the outer circle with text
  innerDotSize: 10, // Size of the inner dot

  // Colors (will use theme colors by default)
  // Note: Text color should be white for mix-blend-difference to work properly
  outerCircleColor: "rgba(13, 148, 136, 0.15)", // accent color with opacity
  innerDotColor: "#0D9488", // accent color (teal)
  textColor: "white", // white works best with mix-blend-difference

  // Animation settings
  rotationSpeed: 1, // Degrees per frame (higher = faster)
  springStiffness: 150, // Spring animation stiffness
  springDamping: 30, // Spring animation damping
  hoverScale: 0.33, // Scale of circle when hovering (1/3 = 0.33, set to 1 to keep same size)

  // Text settings
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

      // Check if hovering over interactive element
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

    // Rotate text continuously
    const rotateInterval = setInterval(() => {
      setRotation((prev) => (prev + cursorConfig.rotationSpeed) % 360);
    }, 20);

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      clearInterval(rotateInterval);
    };
  }, []);

  // Hide cursor on mobile/touch devices
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  if (isTouchDevice) {
    return null;
  }

  const radius = cursorConfig.outerCircleDiameter / 2;
  const centerOffset = radius - 5; // Offset for text path

  return (
    <>
      {/* Outer circle with rotating text - follows cursor with delay */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - radius,
          y: mousePosition.y - radius,
          scale: isHovering ? cursorConfig.hoverScale : 1,
        }}
        transition={{
          type: "spring",
          stiffness: cursorConfig.springStiffness,
          damping: cursorConfig.springDamping,
          mass: 0.1,
        }}
        style={{
          width: `${cursorConfig.outerCircleDiameter}px`,
          height: `${cursorConfig.outerCircleDiameter}px`,
          borderRadius: "50%",
          backgroundColor: cursorConfig.outerCircleColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Rotating text - hidden when hovering */}
        <motion.svg
          width={cursorConfig.outerCircleDiameter}
          height={cursorConfig.outerCircleDiameter}
          viewBox={`0 0 ${cursorConfig.outerCircleDiameter} ${cursorConfig.outerCircleDiameter}`}
          style={{
            position: "absolute",
            overflow: "visible",
          }}
          animate={{
            rotate: rotation,
            opacity: isHovering ? 0 : 1,
            scale: isHovering ? 0 : 1,
          }}
          transition={{
            duration: 0.2,
          }}
        >
          <defs>
            <path
              id="circle-path"
              d={`M ${radius}, ${radius} m -${centerOffset}, 0 a ${centerOffset},${centerOffset} 0 1,1 ${
                centerOffset * 2
              },0 a ${centerOffset},${centerOffset} 0 1,1 -${
                centerOffset * 2
              },0`}
              fill="none"
            />
          </defs>
          <text
            fill={cursorConfig.textColor}
            fontSize={cursorConfig.textSize}
            fontWeight={cursorConfig.textFontWeight}
            letterSpacing={cursorConfig.textLetterSpacing}
          >
            <textPath href="#circle-path" startOffset="0%">
              {cursorConfig.text}
            </textPath>
          </text>
        </motion.svg>
      </motion.div>

      {/* Inner dot - follows cursor more closely */}
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

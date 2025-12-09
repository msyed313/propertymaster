import { useState, useEffect,type FC, type MouseEvent } from "react";

interface Position {
  x: number;
  y: number;
}

const MouseTrail: FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState<boolean>(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent): void => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if the hovered element has pointer cursor
      const hoveredElement = e.target as HTMLElement;
      const computedStyle = window.getComputedStyle(hoveredElement);
      setIsPointer(computedStyle.cursor === "pointer");
    };

    window.addEventListener("mousemove", moveCursor as unknown as EventListener);
    return () =>
      window.removeEventListener("mousemove", moveCursor as unknown as  EventListener);
  }, []);

  return (
    <>
      {/* Outer Border Circle */}
      <div
        className={`border-2 z-100 border-green-200 rounded-full fixed pointer-events-none transition-all duration-300 ease-out ${
          isPointer ? "w-8 h-8" : "w-6 h-6"
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      {/* Small White Dot (Cursor Follower) - Hide if Pointer */}
      {!isPointer && (
        <div
          className="w-2 h-2 bg-white rounded-full fixed pointer-events-none"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      )}
    </>
  );
};

export default MouseTrail;
import React, { useEffect, useMemo, useRef, useState } from "react";

// Hook para capturar la posición del mouse dentro de un elemento
export function useMouse(ref) {
  const [mouse, setMouse] = useState({ x: 0, y: 0, isActive: false });

  useEffect(() => {
    if (ref.current) {
      const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMouse({ x, y, isActive: true });
      };

      const handleMouseOut = () => {
        setMouse({ x: 0, y: 0, isActive: false });
      };

      ref.current.addEventListener("mousemove", handleMouseMove);
      ref.current.addEventListener("mouseout", handleMouseOut);

      return () => {
        ref.current.removeEventListener("mousemove", handleMouseMove);
        ref.current.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref]);

  return mouse;
}

// Hook para implementar el efecto de zoom interactivo basado en la posición del mouse
export function useMouseOverZoom(sourceRef, targetRef, cursorRef, radius = 25) {
  const { x, y, isActive } = useMouse(sourceRef);

  const zoomBounds = useMemo(() => {
    return {
      left: x - radius,
      top: y - radius,
      width: radius * 2,
      height: radius * 2,
    };
  }, [x, y, radius]);

  useEffect(() => {
    if (cursorRef.current) {
      const { left, top, width, height } = zoomBounds;
      cursorRef.current.style.left = `${left}px`;
      cursorRef.current.style.top = `${top}px`;
      cursorRef.current.style.width = `${width}px`;
      cursorRef.current.style.height = `${height}px`;
      cursorRef.current.style.display = isActive ? "block" : "none";
    }
  }, [zoomBounds, isActive, cursorRef]);

  useEffect(() => {
    if (sourceRef.current && targetRef.current) {
      const ctx = targetRef.current.getContext("2d");
      if (ctx) {
        if (isActive) {
          const { left, top, width, height } = zoomBounds;
          const imageRatio = sourceRef.current.naturalWidth / sourceRef.current.width;
          ctx.drawImage(
            sourceRef.current,
            left * imageRatio,
            top * imageRatio,
            width * imageRatio,
            height * imageRatio,
            0,
            0,
            targetRef.current.width,
            targetRef.current.height
          );
        } else {
          ctx.clearRect(0, 0, targetRef.current.width, targetRef.current.height);
        }
      }
    }
  }, [zoomBounds, isActive, sourceRef, targetRef]);
}
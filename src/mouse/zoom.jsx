import React, { useRef, useState } from "react";
import { useMouse, useMouseOverZoom } from "./useMouseAndZoom.jsx";
import "./zoom.scss"; // Importa los estilos SCSS

const ImageZoom= () => {
    const sourceRef = useRef(null); // Ref para la imagen principal
    const targetRef = useRef(null); // Ref para el canvas de zoom
    const cursorRef = useRef(null); // Ref para el cursor de zoom
  
    useMouseOverZoom(sourceRef, targetRef, cursorRef);
  
    return (
      <div className="img-zoom-container">
        <img
          ref={sourceRef}
          src="/Leighton-God_Speed!.jpg"
          alt="Imagen"
          className="item-img"
        />
        <canvas
          ref={targetRef}
          className="zoom-canvas"
          width={280} // Ancho del canvas de zoom
          height={150} // Alto del canvas de zoom
        />
        <div ref={cursorRef} className="zoom-cursor" />
      </div>
    );
  };
  
  export default ImageZoom;
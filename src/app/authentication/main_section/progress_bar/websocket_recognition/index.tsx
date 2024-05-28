"use client"
import React, { useEffect, useRef } from 'react';
import styles from "./websocket.style.module.scss"

function FacialRecognition() {

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {

    const websocket = new WebSocket('ws://192.168.244.252:8000/facialRecognition/websocket');
    websocket.onmessage = (event) => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.src = URL.createObjectURL(event.data);
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
    };

    // Cleanup function to close the WebSocket connection
    return () => {
      websocket.close();
    };
  }, []);

  return (
    <div className={styles.camera}>
      <canvas ref={canvasRef} className={styles.videoCanvas}/>
    </div>
  );
}

export {FacialRecognition};

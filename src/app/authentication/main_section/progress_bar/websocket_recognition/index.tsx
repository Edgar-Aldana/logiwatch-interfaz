import React, { useEffect, useRef, useState } from 'react';
import styles from "./websocket.style.module.scss";
import { urlAPI } from '@services/config';

function FacialRecognition() {

  const canvasRef = useRef(null);
  const [alertMessage, setAlertMessage] = useState("");  // Estado para almacenar el mensaje de alerta
  const [statusColor, setStatusColor] = useState("#93d302")

  useEffect(() => {
    const websocket = new WebSocket(`${urlAPI.replace("http", "ws")}/facialRecognition/websocket`);
    websocket.onmessage = (event) => {

      const data = JSON.parse(event.data); // Convertir los datos JSON a objeto
      if (data.type === "alert") {
        // Si es un mensaje de alerta, actualizar el estado con el mensaje
        setAlertMessage(data.data.alert);
        setStatusColor("#FCFF33")
      } else if (data.type === "frame") {
        setStatusColor("#93d302")
        // Si es un frame, decodificar los datos Base64 y mostrar la imagen en el canvas
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.onload = () => {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
        img.src = `data:image/jpeg;base64,${data.data}`;
        setAlertMessage("NORMAL")
      }
    };

    // Cleanup function to close the WebSocket connection
    return () => {
      websocket.close();
    };
  }, []);

  return (


    <div className={styles.cameraContainer}>

      <div className={styles.camera}>
        <canvas ref={canvasRef} className={styles.videoCanvas}/>  
      </div>  

      <div className={styles.alert}>
        <span>Estado del conductor:</span>
        { alertMessage && <span className={styles.Status} style={{backgroundColor: statusColor}}>{ alertMessage }</span>} {/* Mostrar el mensaje de alerta */}
      </div>

    </div>

    

    
  


);
}

export {FacialRecognition};

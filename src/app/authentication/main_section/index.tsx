import React from 'react';
import { NavAuthentication } from "../nav_authentication/"
import { Camera } from '../main_section/camera/'
import { LoaderWhite } from "@sharing/atoms";
import { ProgressBar } from './progress_bar/';
import { AuthenticationContext } from "@context";
import styles from "./main.styles.module.scss"
import { CameraIdCard } from "./progress_bar/step_id_card/camera_id_card/";


function MainSection() {

    const { ws, setWs, authenticationSuccess, setAuthenticationSuccess, showCamera, setShowCamera, authenticationComplete, showLoader, takePictureIdCardFront, takePictureIdCardBack, showCameraIdCard, setShowLoader, setInstruction, setAuthenticationComplete, setIdFile, idFile}: any = React.useContext(AuthenticationContext);
    
    const onMessage = (event:any) => {
        const receivedData = JSON.parse(event.data);
        setInstruction(receivedData['value']);
        if (receivedData['value'] === 'complete') {
            setAuthenticationSuccess(true);
            setIdFile(receivedData['id']);
        }
    };

    React.useEffect(() => {
        const webSocket:any = new WebSocket('wss://192.168.1.164:9001/api/ws');
        webSocket.onmessage = onMessage;
        setWs(webSocket);

        return () => {
            if (webSocket) {
                webSocket.close();
            }
        };
    }, []);

    React.useEffect(() => {
        if (authenticationComplete) {
            setShowLoader(true);
            setTimeout(() => {
                setShowLoader(false);
            }, 900);
            setTimeout(() => {
                setShowCamera(false);
            }, 1000);
        }
    }, [authenticationComplete]);

    return (
        <>
            <NavAuthentication />
            {showCamera ? ws && <Camera/> : <></>}
            {showCameraIdCard && takePictureIdCardFront ? <CameraIdCard typeIdCard={1} /> : <></>}
            {showCameraIdCard && takePictureIdCardBack ? <CameraIdCard typeIdCard={2} /> : <></>}
            {showLoader && (
                <LoaderWhite />
            )}
            <main className={styles.main_container}>
                <ProgressBar/>
            </main>
        </>
    );
}


export { MainSection }
import React from 'react';
import { ArrowRight } from '@icons';
import { Button, LoaderWhite } from "@sharing/atoms";
import { AuthenticationContext } from '@context';
import styles from './step_record.style.module.scss'
import styles_main from "../../main.styles.module.scss"


function StepRecord() {

    const {steps, setSteps, dictSteps, setDictStepsComplete, showLoader, setShowLoader, stateRecord, setStateRecord, stream, permission}:any = React.useContext(AuthenticationContext);

    React.useEffect(() => {
        if (steps == 5) {
            setShowLoader(true);
            setTimeout(() => {
                setShowLoader(false);
            }, 900);
        }
    }, [steps]);

    function setStepsTo7() {
        setSteps(7);
        setDictStepsComplete((prevState: any) => {
            return {
                ...prevState,
                3: true
            }
        });
    }

    React.useEffect(() => {
        if (stateRecord === 2) {
            setShowLoader(true);
            setTimeout(() => {
                setShowLoader(false);
            }, 900);
            setSteps(6);
        }

    }, [stateRecord, setSteps]);

    React.useEffect(() => {
        if (stateRecord === 1) {
            const strokes = document.querySelectorAll('.step_record_style_loader__cv9_B .step_record_style_stroke__dO3fx');
            const waveDuration = 1;
            const minDelay = -0.6;
            const maxDelay = 0.6;
            const numStrokes = strokes.length;
            const timeInterval = waveDuration / numStrokes;
            strokes.forEach((stroke, index) => {
                const randomDelay = (Math.random() * (maxDelay - minDelay) + minDelay).toFixed(1);
                const animationDelay = (index * timeInterval + parseFloat(randomDelay)).toFixed(1);
                const strokeElement = stroke as HTMLElement;

                strokeElement.style.animationDelay = `${animationDelay}s`;
            });
        }
    }, [stateRecord]);


    const mimeType = "audio/webm";
    
    const mediaRecorder:any = React.useRef(null);
    const [recordingStatus, setRecordingStatus] = React.useState("inactive");
    
    const [audioChunks, setAudioChunks] = React.useState([]);
    const [audio, setAudio] = React.useState(null);


    

    const startRecording = async () => {
        setAudio(null);
        setAudioChunks([]);
        setStateRecord(1);
        setRecordingStatus("recording");
        const media = new MediaRecorder(stream, { mimeType });
        mediaRecorder.current = media;
        mediaRecorder.current.start();
        let localAudioChunks: any = [];
        mediaRecorder.current.ondataavailable = (event:any) => {
            if (typeof event.data === "undefined") return;
            if (event.data.size === 0) return;
            localAudioChunks.push(event.data);
        };
        setAudioChunks(localAudioChunks);
    };

    const stopRecording = () => {
        setRecordingStatus("inactive");
        setStateRecord(2);
        mediaRecorder.current.stop();
        mediaRecorder.current.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: mimeType });
            const audioUrl:any = URL.createObjectURL(audioBlob);
            setAudio(audioUrl);
            setAudioChunks([]);
        };
    };

    return (
        <>
            
            <h2 className={styles_main.title_blue}>{dictSteps[5]}</h2>
            { !permission ? null : (
            <section className={styles.container_steps_record}>
                <p className={styles_main.info_container__text}>Por favor grabe el siguiente mensaje en voz alta y clara.</p>
                <h4 className={styles.text_to_record}>“Acepto la compra en línea de mi seguro de Gastos médicos mayores individual, hoy 02/08/23”</h4>
                <div className={styles.container_record}>

                    {stateRecord === 0 ? (
                        <>
                            <p className={styles.container_record__text}>Nota: Oprima el siguiente botón y repita el texto de arriba. La grabación comenzará automáticamente</p>
                            
                            <div className={`${styles.container_btn_record_start} ${styles_main.d_none} ${styles_main.d_md_flex} ${styles_main.d_lg_flex} ${styles_main.d_xl_flex}`}>
                                <Button text={'INICIAR GRABACIÓN'} buttonType={'secondary'} iconLeft="mic" onClick={startRecording} />
                            </div>
                        </>) : null
                    }
                    {stateRecord == 1 ?
                        <>
                        <div className={styles.loader}>
                                    <div className={styles.left_side}></div>
                                    {[...Array(50)].map((_, index) => (
                                        <span key={index} className={styles.stroke}></span>
                                    ))}
                                    <div className={styles.right_side}></div>
                                </div>
                        <div className={`${styles.container_btn_record_stop} ${styles_main.d_none} ${styles_main.d_md_flex} ${styles_main.d_lg_flex} ${styles_main.d_xl_flex}`}>
                            <Button text={'terminar grabación'} buttonType={'secondary'} iconLeft="stop" onClick={stopRecording} />
                            </div>
                            </>
                            :
                            null
                    }
                    {stateRecord == 2 && audio ?
                        <>
                            <div className={styles.container_audio_recorded}>
                                <audio controls src={audio}>
                                    <source src="/test.mp3" type="audio/mpeg" />
                                    <source src="/test.ogg" type="audio/ogg" />
                                    Your browser does not support the audio element.
                                </audio>
                                <div className={styles.container_btn_record_start}>
                                    <Button text={'REPETIR GRABACIÓN'} buttonType={'secondary'} iconLeft="mic" onClick={startRecording} />
                                </div>
                            </div>
                            </>
                            :
                            null
                    }     
                    </div>
                    
                
                </section>)}
            {stateRecord === 0 ? (
                    <div className={`${styles.container_button_start_record} ${styles_main.d_flex} ${styles_main.mt_auto} ${styles_main.d_md_none} ${styles_main.d_lg_none} ${styles_main.d_xl_none}`}>
                        <Button text={'INICIAR GRABACIÓN'} buttonType={'secondary'} iconLeft="mic" onClick={startRecording} />
                    </div>) : null
            }
            {stateRecord == 1 ?
                        <div className={`${styles.container_btn_record_stop} ${styles_main.d_flex} ${styles_main.mt_auto} ${styles_main.d_md_none} ${styles_main.d_lg_none} ${styles_main.d_xl_none}`}>
                            <Button text={'DETENER GRABACIÓN'} buttonType={'secondary'} iconLeft="stop"  onClick={stopRecording} />
                            </div>
                            :
                            null
            }
            <div className={styles.separator_record}></div>
            <div className={`container-continue-step ${steps == 6? styles.container_continue_step_show: styles.container_continue_step_hide}`}>
                    <button disabled={steps < 2} className={`${styles_main.info_container__button} ${steps == 6 ? styles_main.info_container__button__enabled : ""}`}
                        onClick={() => {
                            setStepsTo7();
                        }}
                        >
                        Continuar<ArrowRight fill='#fff'/>
                    </button>
                </div>
            {showLoader && (
                <LoaderWhite />
            )}
        </>
    )
}


export { StepRecord }
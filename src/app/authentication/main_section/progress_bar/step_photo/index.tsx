import React from "react";
import { BodyUserCircle, Lamp, Cancel, ArrowRight } from '@icons';
import { Button, LoaderWhite } from "@sharing/atoms";
import { AuthenticationContext } from "@context";
import { FacialRecognition } from "../websocket_recognition/index"
import styles from "./step_photo.style.module.scss"
import styles_main from "../../main.styles.module.scss"


function StepPhoto() {
    const { setSteps, steps, dictSteps, setDictStepsComplete, showLoader, takePicture, setShowCamera }: any = React.useContext(AuthenticationContext);

    function setStepsTo3() {
        setSteps(3);
        setDictStepsComplete((prevState: any) => {
            return {
                ...prevState,
                1: true
            }
        });
    }
    
    return (
        <>
            <h2 className={styles_main.title_blue}>{dictSteps[1]}</h2>
            <section className={styles.container_steps_photo}>
                <article className={styles.info_container_step_photo}>
                    <p className={styles_main.info_container__text}>Consideraciones:</p>
                    <div className={styles_main.card}>
                        <div className={styles_main.card__item}>
                            <BodyUserCircle fill={'#000'} />
                            <p>El analisis se enfoca principalmente en ojos y equilibrio de conductor.</p>
                        </div>
                        <div className={styles_main.card__item}>
                            <Lamp fill={'#000'} />
                            <p>La iluminación es un parametro importante para los resultados.</p>
                        </div>
                        <div className={styles_main.card__item}>
                            <Cancel fill={'#000'} />
                            <p>No interrumpir la concentración del conductor, de no ser necesario.</p>
                        </div>
                    </div>
                    <button disabled={steps < 2}
                        className={`${styles_main.info_container__button} ${styles_main.d_xl_flex} ${styles_main.d_lg_flex} ${styles_main.d_none} ${styles_main.d_md_none} 
                        ${steps == 2 ? styles_main.info_container__button__enabled : styles_main.info_container__button__enabled}`}
                        onClick={() => {
                            setStepsTo3();
                        }}
                        >
                        ACTIVAR
                    </button>
                    
                    <button disabled={steps < 2}
                        className={`${styles_main.info_container__button} ${styles_main.d_xl_flex} ${styles_main.d_lg_flex} ${styles_main.d_none} ${styles_main.d_md_none} 
                        ${steps == 2 ? styles_main.info_container__button__enabled : styles_main.info_container__button__enabled}`}
                        onClick={() => {
                            setStepsTo3();
                        }}
                        >
                        COMUNICAR CON CONDUCTOR
                    </button>

                </article>
                    
                


                <article className={styles.article}>
                    
                    <FacialRecognition/>

                </article>


                <button disabled={steps < 2}
                        className={`${styles_main.info_container__button}  ${styles_main.d_xl_none} ${styles_main.d_lg_none} ${styles_main.d_flex} ${styles_main.d_md_flex}
                        ${steps == 2 ? styles_main.info_container__button__enabled : styles_main.info_container__button__enabled}`}
                        onClick={() => {
                            setStepsTo3();
                        }}
                        >
                        ACTIVAR
                </button>

                <button disabled={steps < 2}
                        className={`${styles_main.info_container__button}  ${styles_main.d_xl_none} ${styles_main.d_lg_none} ${styles_main.d_flex} ${styles_main.d_md_flex}
                        ${steps == 2 ? styles_main.info_container__button__enabled : styles_main.info_container__button__enabled}`}
                        onClick={() => {
                            setStepsTo3();
                        }}
                        >
                        COMUNICAR CON CONDUCTOR
                </button>

            </section>
            {showLoader && (
                <LoaderWhite />
            )}
        </>
    )
}


export { StepPhoto }
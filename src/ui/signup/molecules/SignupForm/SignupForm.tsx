"use client"
import { useState } from "react";
import styles from "./SignupForm.styles.module.scss";
import Input from "../../../sharing/atoms/Input/Input";
import PasswordInput from "../../../sharing/atoms/PasswordInput/PasswordInput";


export default function SignupForm(){

    return(
        
        
        <div className={styles.container}>
            
            <div className={styles.form}>

                <span className={styles.form_title}>Crear una cuenta</span>

                <div className={styles.coolinput}>
                    <label htmlFor="input" className={styles.text}>Nombre(s)</label>
                    <input type="text" placeholder="..." name="input" className={styles.input}></input>
                </div>


                <div className={styles.coolinput}>
                    <label htmlFor="input" className={styles.text}>Apellido Paterno</label>
                    <input type="text" placeholder="..." name="input" className={styles.input}></input>
                </div>

                <div className={styles.coolinput}>
                    <label htmlFor="input" className={styles.text}>Apellido Materno</label>
                    <input type="text" placeholder="..." name="input" className={styles.input}></input>
                </div>

                <div className={styles.coolinput}>
                    <label htmlFor="input" className={styles.text}>Correo electrónico</label>
                    <input type="text" placeholder="correo@dominio.com" name="input" className={styles.input}></input>
                </div>

                <div className={styles.coolinput}>
                    <label htmlFor="input" className={styles.text}>Password</label>
                    <input type="password" placeholder="********" name="input" className={styles.input}></input>
                </div>


                <div className={styles.coolinput}>
                    <label htmlFor="input" className={styles.text}>Región</label>
                    <input type="text" placeholder="Norte, Sur, Este, Oeste" name="input" className={styles.input}></input>
                </div>
            
        
                <button className={styles.button}>
                    Registrar
                    <svg fill="currentColor" viewBox="0 0 24 24" className={styles.icon}>
                        <path
                        clip-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                        fill-rule="evenodd"
                        ></path>
                    </svg>
                </button>


            </div>
        </div>

       

    );
}
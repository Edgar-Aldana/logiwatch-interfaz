import styles from  './nav_authentication.style.module.scss';


function NavAuthentication() {

    return (
        <>
            <nav className={styles.nav}>
                <ul>
                    <li className={styles.logo}>LogiWatch<span className={styles.subtitle_2}>CONDUCTOR-001</span></li>   
                    <li><h2>Monitoreo de estado</h2></li>
                </ul>
            </nav>
        </>
    )

}


export { NavAuthentication }
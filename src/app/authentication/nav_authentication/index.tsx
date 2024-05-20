import styles from  './nav_authentication.style.module.scss';
import profile from '@images/authentication/profile.jpg'

function NavAuthentication() {

    return (
        <>
            <nav className={styles.nav}>
                <ul>
                    <li className={styles.logo}>LogiWatch</li>   
                    <li><span className={styles.subtitle_2}>CONDUCTOR 001</span></li>
                </ul>

            </nav>
        </>
    )

}


export { NavAuthentication }
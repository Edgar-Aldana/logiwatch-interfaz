import styles from "@login/styles/login.styles.module.scss";
import { FormsContainer } from "@login/ui/organisms";

export default async function Login(){

    return(
        <div className={styles.container}>
            <div className={styles.left_section}>
                <div className={styles.logo}>LogiWatch</div>
                <FormsContainer />
            </div>
            <div className={styles.right_section}></div>
        </div>
    )
}
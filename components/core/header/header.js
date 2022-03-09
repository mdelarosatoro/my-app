import Image from "next/image";
import styles from "./header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.imgContainer}>
                <Image
                    className={styles.logo}
                    src="/images/logo.png"
                    alt="Salesforce logo"
                    width="100"
                    height="70"
                />
            </div>
            <h1>ISDI CRM</h1>
        </header>
    );
};

export default Header;

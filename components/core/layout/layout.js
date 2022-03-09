import Head from "next/head";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./layout.module.scss";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Clients - Salesforce</title>
                <meta
                    name="description"
                    content="Customer Relationship Management Tool"
                />
            </Head>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer></Footer>
        </>
    );
};

export default Layout;

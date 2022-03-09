import styles from "./button.module.scss";

const Button = ({ children, type, handler, className }) => {
    return (
        <button onClick={handler} type={type} className={styles[className]}>
            {children}
        </button>
    );
};

export default Button;

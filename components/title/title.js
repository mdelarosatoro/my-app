import Button from "../core/button/button";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import styles from "./title.module.scss";

const Title = ({ toggleEditMode, addMode }) => {
    return (
        <div className={styles.titleContainer}>
            <h2>Clients</h2>
            <Button handler={toggleEditMode} className="addbtn">
                {!addMode ? <AiFillPlusCircle /> : <AiFillMinusCircle />}
            </Button>
        </div>
    );
};

export default Title;

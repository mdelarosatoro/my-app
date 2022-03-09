import Button from "../core/button/button";
import styles from "./edit-client.module.scss";

const EditClient = ({ handleSubmit, cancelEdit }) => {
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="name">New Name:</label>
            <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
            />
            <div className={styles.buttonContainer}>
                <Button className="button" type="submit">
                    Edit
                </Button>
                <Button handler={cancelEdit} className="button" type="submit">
                    Cancel
                </Button>
            </div>
        </form>
    );
};

export default EditClient;

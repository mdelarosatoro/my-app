import { createContact } from "../../services/api-connection";
import Button from "../core/button/button";
import styles from "./add-client.module.scss";

const AddClient = ({ token, refreshSSProps }) => {
    return (
        <form
            className={styles.form}
            onSubmit={(e) =>
                createContact(e, token).then(() => refreshSSProps())
            }
        >
            <h2 className={styles.title}>Add a new contact</h2>
            <div className={styles.inputContainer}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className={styles.input}
                />
            </div>
            <Button className="button" type="submit">
                Create
            </Button>
        </form>
    );
};

export default AddClient;

import { useState } from "react";
import Button from "../core/button/button";
import EditClient from "../edit-client/edit-client";
import styles from "./client.module.scss";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

const Client = ({
    client,
    refreshSSProps,
    deleteContact,
    token,
    editContact,
}) => {
    const [editMode, setEditMode] = useState(false);

    const handleClick = () => {
        deleteContact(client.attributes.url, token).then(() =>
            refreshSSProps()
        );
    };

    const handleSubmit = (e) => {
        editContact(e, client.attributes.url, token).then(() =>
            refreshSSProps()
        );
        setEditMode(false);
    };

    const handleEditMode = () => {
        setEditMode(true);
    };

    const cancelEdit = () => {
        setEditMode(false);
    };

    return (
        <div className={styles.client} key={client.attributes.url}>
            <p className={styles.name}>{client.Name}</p>
            <Button className="deletebtn" handler={handleClick}>
                <BsFillTrashFill />
            </Button>
            {!editMode && (
                <Button className="editbtn" handler={handleEditMode}>
                    <BsFillPencilFill />
                </Button>
            )}
            {editMode && (
                <EditClient
                    cancelEdit={cancelEdit}
                    handleSubmit={handleSubmit}
                />
            )}
        </div>
    );
};

export default Client;

import { useRouter } from "next/router";
import { useState } from "react";
import AddClient from "../components/add-client/add-client";
import Client from "../components/client/client";
import Button from "../components/core/button/button";
import Layout from "../components/core/layout/layout";
import Grid from "../components/grid/grid";
import Title from "../components/title/title";
import {
    createContact,
    deleteContact,
    editContact,
    getAllContacts,
    getToken,
} from "../services/api-connection";

const Page = ({ data, token }) => {
    const [addMode, setAddMode] = useState(false);

    const toggleEditMode = () => setAddMode(!addMode);

    const router = useRouter();

    const refreshSSProps = () => {
        router.replace(router.asPath);
    };

    return (
        <Layout>
            <Title toggleEditMode={toggleEditMode} addMode={addMode} />
            {addMode && (
                <AddClient
                    token={token}
                    createContact={createContact}
                    refreshSSProps={refreshSSProps}
                />
            )}
            <Grid>
                {data &&
                    data.records &&
                    data.records.map((item) => {
                        return (
                            <Client
                                key={item.id}
                                client={item}
                                refreshSSProps={refreshSSProps}
                                deleteContact={deleteContact}
                                token={token}
                                editContact={editContact}
                            />
                        );
                    })}
            </Grid>
        </Layout>
    );
};

// Método para que me devuelva los datos de la API:

export const getServerSideProps = async () => {
    const token = await getToken();
    const data = await getAllContacts();

    return { props: { data, token } };
};

export default Page;

import React from 'react';
import Replies from "../components/Replies.jsx";
import Layout from "../components/Layout.jsx";

function RepliesPage(props) {
    return (
        <div>
            <Layout>
                <Replies/>
            </Layout>
        </div>
    );
}

export default RepliesPage;
import React from 'react';
import Replies from "../components/Replies.jsx";
import Layout from "../components/Layout.jsx";
import Charts from "../components/Charts.jsx";

function RepliesPage() {
    return (
        <Layout>
            <div className="px-28 w-full">
                <h1 className="text-[28px] font-semibold mt-5 p-4">Отклики и приглашения</h1>
                <div className="border" />
                <Charts />
                <Replies/>
            </div>
        </Layout>
    );
}

export default RepliesPage;

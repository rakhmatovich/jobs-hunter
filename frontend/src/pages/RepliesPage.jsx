import React from 'react';
import Replies from "../components/Replies.jsx";
import Layout from "../components/Layout.jsx";

function RepliesPage() {
    return (
        <Layout>
            <div className="px-20">
                <h1 className="text-[28px] font-semibold mt-5">Отклики и приглашения</h1>
                <Replies/>
            </div>
        </Layout>
    );
}

export default RepliesPage;

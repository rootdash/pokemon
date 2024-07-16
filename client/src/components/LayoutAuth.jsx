import React from "react";

const LayoutAuth = (props) => {
    const { children } = props;

    return (
        <main>

            <div className="w-full h-dvh overflow-auto  flex flex-col 2xl:flex-row" >{children}</div>

        </main>
    );
};

export default LayoutAuth;
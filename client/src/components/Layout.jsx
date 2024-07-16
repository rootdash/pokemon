import React from "react";

const Layout = (props) => {
    const { children } = props;

    return (
        <main className="flex flex-col min-h-screen">
            <div className="p-4">
                {children}
            </div>
        </main>
    );
};

export default Layout;
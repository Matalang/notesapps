import React from "react";
import Header from "../components/shared/Header.js";
import Footer from "../components/shared/Footer.js";

const PageLayout = (props) => {
    const {children} = props;
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default PageLayout;
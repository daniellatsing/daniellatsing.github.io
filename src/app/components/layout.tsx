import React from 'react';
import Navbar from "./navbar";
import Footer from "./footer";
import ErrorBoundary from "../components/error-checker";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ErrorBoundary>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </ErrorBoundary>
    );
};

export default Layout;

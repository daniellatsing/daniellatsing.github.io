import '../app/globals.css';
import Footer from "../app/components/footer";
import Navbar from "../app/components/navbar";

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Navbar />
            <main>
                <Component {...pageProps} />
            </main>

            <Footer />
        </div>
    );
}

export default MyApp

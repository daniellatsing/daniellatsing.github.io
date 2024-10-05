import "@/app/globals.css";
import Head from 'next/head';
import Layout from "../app/components/layout";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <AppRouterCacheProvider>
                <Head>
                    <title>Daniella Tsing</title>
                    <meta name="description" content="Daniella Tsing's personal website" />
                    <link rel="icon" href="/favicon/favicon-32x32.png" />
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AppRouterCacheProvider>
        </div>
    );
}

export default MyApp

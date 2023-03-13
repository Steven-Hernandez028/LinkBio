import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import Router from "next/router";
import Loading from "./components/Loading";

const inter = Inter({ subsets: ["latin"] });
// const inconsolata = Inconsolata({
//   weight: '400',
//   subsets: ['latin']
// })



export default function App({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const handleStart = () => {
            setLoading(true);
        };

        const handleComplete = () => {
            setLoading(false);
        };

        Router.events.on("routeChangeStart", handleStart);
        Router.events.on("routeChangeComplete", handleComplete);
        Router.events.on("routeChangeError", handleComplete);

        return () => {
            Router.events.off("routeChangeStart", handleStart);
            Router.events.off("routeChangeComplete", handleComplete);
            Router.events.off("routeChangeError", handleComplete);
        };
    }, []);
    return (
        <>
            <style jsx global>
                {`
                    * {
                        padding: 0px;
                        margin: 0px;
                    }
                    html {
                        font-family: ${inter.style.fontFamily};
                        background: #060528;
                        box-sizing: border-box;
                        font-size: 16px;
                        overflow-x: hidden;
                        scroll-behavior: smooth;
                    }
                `}
            </style>
            {loading ? <Loading/> :      <Component {...pageProps} />}
       
        </>
    );
}

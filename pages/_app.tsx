import type { AppProps } from "next/app";
import { ScrollButton } from "../components/ScrollButton";
import { ThemeProvider } from "next-themes";

import { init } from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
    useEffect((): void => {
        init();
    });

    return (
        <ThemeProvider>
            <Component {...pageProps} />
            <ScrollButton />
        </ThemeProvider>
    );
}

export default App;

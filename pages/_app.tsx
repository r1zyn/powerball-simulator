import type { AppProps } from "next/app";
import { Disclaimer } from "../components/Disclaimer";
import { ScrollButton } from "../components/ScrollButton";
import { ThemeProvider } from "next-themes";

import { init } from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps): JSX.Element {
    useEffect((): void => {
        init();
    });

    return (
        <ThemeProvider>
            <Component {...pageProps} />
            <Disclaimer />
            <ScrollButton />
        </ThemeProvider>
    );
}

export default App;

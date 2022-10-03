import { Metadata } from "./types";

export const alphabets: string[] = "abcdefghijklmnopqrstuvwxyz"
    .toUpperCase()
    .split("")
    .slice(0, 10);

export const metadata: Metadata = {
    url:
        process.env.NODE_ENV === "production"
            ? "http://localhost:3000"
            : "http://localhost:3000/",
    "theme-color": "#ffffff",
    image: "/favicon.ico",
    icon: "/favicon.ico",
    keywords: ["lotto", "lottery", "powerball", "simulator"]
};

export const urls = {
    article:
        "https://www.rnz.co.nz/news/in-depth/474134/lotto-stores-in-poorest-half-of-nz-account-for-70-percent-of-sales",
    license: "https://github.com/r1zyn/powerball-simulator/blob/master/LICENSE",
    github: "https://github.com/r1zyn/powerball-simulation",
    nextjs: "https://nextjs.org/",
    nodejs: "https://nodejs.org/",
    developer: "https://github.com/r1zyn",
    sockt: "https://sockt.vercel.app/",
    matrix: "https://matrixdev.xyz/",
    lotto: "https://mylotto.co.nz/lotto/how-to-play"
};

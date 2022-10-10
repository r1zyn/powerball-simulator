import { Metadata } from "./types";

import { assetPath } from "./utils";

export const alphabets: string[] = "abcdefghijklmnopqrstuvwxyz"
    .toUpperCase()
    .split("")
    .slice(0, 10);

export const metadata: Metadata = {
    url:
        process.env.NODE_ENV === "production"
            ? "https://r1zyn.github.io/powerball-simulator/"
            : "http://localhost:3000/",
    "theme-color": "#ffffff",
    image: assetPath("/assets/XJY3ZrAQqf5zCq3kZb6obQUF1grJp6k6.png"),
    icon: assetPath("/assets/c7p3jjI2BFgGszRhVxRjtZdYDFeADlrt.png"),
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

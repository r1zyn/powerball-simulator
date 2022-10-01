// import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Link } from "../components/Next";
import type { NextPage } from "next";
import { Page } from "../components/Page";
// import type { PowerballData } from "../lib/types";

import { scrollToElement } from "../lib/utils";
import styles from "../styles/Home.module.css";
import { urls } from "../lib/constants";
import { useEffect } from "react";

const Home: NextPage = () => {
    // const [powerballData, setPowerballData]: [PowerballData | null, Dispatch<SetStateAction<PowerballData | null>>] = useState<PowerballData | null>(null);

    useEffect((): void => {
        // const data: PowerballData = getPowerballData();
        const canvas: HTMLCanvasElement | null = document.getElementById(
            "lotto-ticket"
        ) as HTMLCanvasElement | null;

        if (canvas) {
            const ctx: CanvasRenderingContext2D | null =
                canvas.getContext("2d");

            if (ctx) {
                ctx.imageSmoothingEnabled = true;

                ctx.fillStyle = "#FFE66D";
                ctx.fillRect(50, 0, 220, canvas.height);

                ctx.fillStyle = "#000000";
                ctx.font = "15px Arial";
                ctx.textAlign = "center";
                ctx.fillText(
                    "Generating...",
                    canvas.width / 2,
                    canvas.height / 2
                );

                // ctx.drawImage(document.getElementById("powerball-logo-two") as HTMLImageElement, 100, 0, 120, 30);

                // for (const _row in data.lottoNumbers) {
                //     for (const _col in data.lottoNumbers[_row]) {
                //         const row = parseInt(_row);
                //         const col = parseInt(_col);
                //         ctx.fillRect(50 + (col * 40), 50 + (row * 40), 40, 40);
                //         ctx.fillStyle = "#000000";
                //         ctx.font = "30px Arial";
                //         ctx.fillText(data.lottoNumbers[row][col].toString(), 70 + (col * 40), 80 + (row * 40));
                //         ctx.fillStyle = "#FFE66D";
                //     }
                // }
            }
        }
    });

    return (
        <Page title="Powerball Simulation" description="">
            <div className={styles["header-container"]} id="header-container">
                <div
                    className={styles["intro-container"]}
                    data-aos="fade-up"
                    data-aos-duration="3000">
                    <h1 className={styles.title}>
                        It&apos;s Time To Stop{" "}
                        <br className={styles["title-br-desktop"]} />
                        Losing Money.{" "}
                    </h1>

                    <h2 className={styles.description}>
                        It&apos;s time to stop paying to see your money fly
                        straight out the window. Nearly 70 percent of Lotto shop
                        sales are made in the poorest half of the NZ community.{" "}
                        <br className={styles["description-br"]} />
                        This Powerball simulation shows how paying for Lotto
                        tickets is simply not worth it.{" "}
                    </h2>

                    <div className={styles["main-button"]}>
                        <div className={styles["button-spacer"]}>
                            <a
                                className={styles["blue-btn"]}
                                onClick={(): void => scrollToElement("simulation-container")}>
                                View Simulation{" "}
                            </a>
                        </div>
                        <div className={styles["button-spacer"]}>
                            <Link href={urls.article} passHref>
                                <a
                                    className={styles["white-btn"]}
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    Read Article{" "}
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className={styles["links"]}>
                            <Link href={urls.license} passHref>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className={styles.link}>
                                    <span className={styles.license}>
                                        License: MIT
                                    </span>
                                </a>
                            </Link>

                            <div className={styles.link}>
                                <Link href={urls.github} passHref>
                                    <a
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className={styles.github}>
                                        GitHub{" "}
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={styles["simulation-container"]}
                id="simulation-container">
                <div
                    className={styles.info}
                    data-aos="fade-right"
                    data-aos-duration="3000">
                    <h1 className={styles["info-title"]}>Simulation</h1>
                    <p className={styles["info-description"]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>

                <div
                    className={styles.simulation}
                    data-aos="fade-up"
                    data-aos-duration="3000">
                    <canvas id="lotto-ticket">
                        <div style={{ display: "none" }}>
                            <img
                                id="powerball-logo-two"
                                src="/assets/YhT6DmCAzwyvoJLVCC1NJPvyPGZFINZ5.png"
                                alt=""
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </canvas>
                </div>
            </div>
        </Page>
    );
};

export default Home;

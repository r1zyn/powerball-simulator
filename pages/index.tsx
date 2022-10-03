import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Filler } from "../components/Filler";
import JsBarcode from "jsbarcode";
import { Link } from "../components/Next";
import type { NextPage } from "next";
import { Page } from "../components/Page";
import type { PowerballData } from "../lib/types";

import { alphabets, urls } from "../lib/constants";
import { getDate, getDay, getPowerballData, randomNumber, scrollToElement } from "../lib/utils";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    const [lottoNumbers, setLottoNumbers]: [number[][], Dispatch<SetStateAction<number[][]>>] = useState<number[][]>([]);
    const [finalLottoNumbers, setFinalLottoNumbers]: [{ correct: boolean; value: number; }[][], Dispatch<SetStateAction<{ correct: boolean; value: number; }[][]>>] = useState<{ correct: boolean; value: number; }[][]>([]);
    const [winningLine, setWinningLine]: [number[], Dispatch<SetStateAction<number[]>>] = useState<number[]>([]);
    const [bonusball, setBonusball]: [number, Dispatch<SetStateAction<number>>] = useState<number>(0);
    const [powerball, setPowerball]: [number, Dispatch<SetStateAction<number>>] = useState<number>(0);
    const [totalWinnings, setTotalWinnings]: [number, Dispatch<SetStateAction<number>>] = useState<number>(0);

    const resetData = (): void => {
        setLottoNumbers([]);
        setFinalLottoNumbers([]);
        setWinningLine([]);
        setBonusball(0);
        setPowerball(0);
        setTotalWinnings(0);
    };

    useEffect((): void => {
        const data: PowerballData = getPowerballData({
            lottoNumbers: [],
            finalLottoNumbers: [],
            winningLine: [],
            bonusball: 0,
            powerball: 0,
            totalWinnings: 0
        });

        setLottoNumbers(data.lottoNumbers);
        setFinalLottoNumbers(data.finalLottoNumbers);
        setWinningLine(data.winningLine);
        setBonusball(data.bonusball);
        setPowerball(data.powerball);
        setTotalWinnings(data.totalWinnings);

        JsBarcode("#barcode")
            .options({ font: "OCR-B", height: 25, background: "transparent" })
            .CODE128(randomNumber(0, 10000000000000).toString().padStart(12, "0"), { fontSize: 18, textMargin: 0, font: "", displayValue: false })
            .render();
    }, [setLottoNumbers]);

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

                    <a
                        className={styles["blue-btn"]}
                        onClick={(): void => {
                            resetData();

                            const data: PowerballData = getPowerballData({
                                lottoNumbers,
                                finalLottoNumbers,
                                winningLine,
                                bonusball,
                                powerball,
                                totalWinnings
                            });

                            setLottoNumbers(data.lottoNumbers);
                            setFinalLottoNumbers(data.finalLottoNumbers);
                            setWinningLine(data.winningLine);
                            setBonusball(data.bonusball);
                            setPowerball(data.powerball);
                            setTotalWinnings(data.totalWinnings);

                            JsBarcode("#barcode")
                                .options({ font: "OCR-B", height: 25, background: "transparent" })
                                .CODE128(randomNumber(0, 10000000000000).toString().padStart(12, "0"), { fontSize: 18, textMargin: 0, font: "", displayValue: false })
                                .render();
                        }}>
                        Run Simulation{" "}
                    </a>
                </div>

                <div
                    className={styles.simulation}
                    data-aos="fade-up"
                    data-aos-duration="3000"
                >
                    <div className={styles["simulation-app"]} id="simulation-app">
                        <div className={styles["ticket-header"]}>
                            <span className={styles["ticket-logo"]}></span>
                            <span>Power Dip</span>
                        </div>

                        <div className={styles["ticket-body"]}>
                            <span className={styles["ticket-powerball"]}>
                                Power
                                <br />
                                Ball
                            </span>
                            <span>{"=".repeat(48)}</span>
                            {
                                lottoNumbers.map((row: number[], i: number): JSX.Element => (
                                    <div className={styles["ticket-row"]} key={i}>
                                        {
                                            row.map((col: number, j: number): JSX.Element => (
                                                <div className={styles["ticket-col"]} key={j}>
                                                    {j === 0 ?
                                                        <div style={{
                                                            display: "flex",
                                                            flexDirection: "row",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                            columnGap: "1.5rem"
                                                        }}>
                                                            <span>{alphabets[i]}.</span>
                                                            <span>{col.toString().padStart(2, "0")}</span>
                                                        </div> :
                                                        j === 6 ?
                                                            `${col.toString().padStart(2, "0")} ┆` :
                                                            col.toString().padStart(2, "0")}
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                            <span>{"=".repeat(48)}</span>
                        </div>

                        <div className={styles["ticket-info"]}>
                            <div className={styles["ticket-info-col-left"]}>
                                <span>Price</span>
                                <span>Draw</span>
                                <Filler />
                                <Filler />
                                <Filler />
                                <span>RET {randomNumber(0, 10000000).toString().padStart(6, "0")}</span>
                                <Filler />
                            </div>

                            <div className={styles["ticket-info-col-right"]}>
                                <span>$15.00</span>
                                <span>{randomNumber(0, 1000).toString().padStart(4, "0")}</span>
                                <span>{getDay().slice(0, 3)}</span>
                                <span>{getDate()}</span>
                                <Filler />
                                <span>{randomNumber(0, 1000).toString().padStart(3, "0")}-{randomNumber(0, 10000000000).toString().padStart(10, "0")}-{randomNumber(0, 10000).toString().padStart(4, "0")}</span>
                                <Filler />
                            </div>
                        </div>

                        <svg id="barcode" className={styles["ticket-barcode"]}></svg>
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default Home;

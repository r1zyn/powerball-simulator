import { Column } from "../components/Column";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import type { Division, PowerballData } from "../lib/types";
import { Filler } from "../components/Filler";
import JsBarcode from "jsbarcode";
import { Link } from "../components/Next";
import type { NextPage } from "next";
import { Page } from "../components/Page";

import { alphabets, urls } from "../lib/constants";
import about from "../lib/data/about.json";
import divisionData from "../lib/data/divisions.json";
import metadata from "../lib/data/metadata.json";
import {
    getDate,
    getDay,
    getPowerballData,
    randomNumber,
    scrollToElement
} from "../lib/utils";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    const [lottoNumbers, setLottoNumbers]: [
        number[][],
        Dispatch<SetStateAction<number[][]>>
    ] = useState<number[][]>([]);
    const [finalLottoNumbers, setFinalLottoNumbers]: [
        { correct: boolean; value: number }[][],
        Dispatch<SetStateAction<{ correct: boolean; value: number }[][]>>
    ] = useState<{ correct: boolean; value: number }[][]>([]);
    const [winningLine, setWinningLine]: [
        number[],
        Dispatch<SetStateAction<number[]>>
    ] = useState<number[]>([]);
    const [bonusball, setBonusball]: [
        number,
        Dispatch<SetStateAction<number>>
    ] = useState<number>(0);
    const [powerball, setPowerball]: [
        number,
        Dispatch<SetStateAction<number>>
    ] = useState<number>(0);
    const [totalWinnings, setTotalWinnings]: [
        number,
        Dispatch<SetStateAction<number>>
    ] = useState<number>(0);

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
            .CODE128(
                randomNumber(0, 10000000000000).toString().padStart(12, "0"),
                { fontSize: 18, textMargin: 0, font: "", displayValue: false }
            )
            .render();
    }, [setLottoNumbers]);

    return (
        <Page {...{
            title: metadata.home.name,
            description: metadata.home.description
        }}>
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
                                onClick={(): void =>
                                    scrollToElement("simulation-container")
                                }>
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
                                        License: Unlicense
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
                        This simulation replicates a Powerball power dip
                        scenario. A set of 10 lines with random numbers will be
                        generated, and can be re-generated by pressing on the
                        &quot;Run Simulation&quot; button below. The simulation
                        will generate the random winning numbers and calculate
                        the total winnings according to the divisions. The
                        divisions are listed in the section below.
                        <br />
                        <br />
                        Total Winnings: ${totalWinnings}
                        <br />
                        Winning Numbers:{" "}
                        {winningLine
                            .map((number: number): string =>
                                number.toString().padStart(2, "0")
                            )
                            .join(", ")}
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
                                .options({
                                    font: "OCR-B",
                                    height: 25,
                                    background: "transparent"
                                })
                                .CODE128(
                                    randomNumber(0, 10000000000000)
                                        .toString()
                                        .padStart(12, "0"),
                                    {
                                        fontSize: 18,
                                        textMargin: 0,
                                        font: "",
                                        displayValue: false
                                    }
                                )
                                .render();
                        }}>
                        Run Simulation{" "}
                    </a>
                </div>

                <div
                    className={styles.simulation}
                    data-aos="fade-up"
                    data-aos-duration="3000">
                    <div
                        className={styles["simulation-app"]}
                        id="simulation-app">
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
                            {lottoNumbers.map(
                                (row: number[], i: number): JSX.Element => (
                                    <div
                                        className={styles["ticket-row"]}
                                        key={i}>
                                        {row.map(
                                            (
                                                col: number,
                                                j: number
                                            ): JSX.Element => (
                                                <div
                                                    className={
                                                        styles["ticket-col"]
                                                    }
                                                    key={j}>
                                                    {j === 0 ? (
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexDirection:
                                                                    "row",
                                                                justifyContent:
                                                                    "center",
                                                                alignItems:
                                                                    "center",
                                                                columnGap:
                                                                    "1.5rem"
                                                            }}>
                                                            <span>
                                                                {alphabets[i]}.
                                                            </span>
                                                            <span
                                                                style={{
                                                                    color: finalLottoNumbers[
                                                                        i
                                                                    ][j].correct
                                                                        ? "red"
                                                                        : "black",
                                                                    fontWeight:
                                                                        finalLottoNumbers[
                                                                            i
                                                                        ][j]
                                                                            .correct
                                                                            ? "bold"
                                                                            : "normal"
                                                                }}>
                                                                {col
                                                                    .toString()
                                                                    .padStart(
                                                                        2,
                                                                        "0"
                                                                    )}
                                                            </span>
                                                        </div>
                                                    ) : j === 6 ? (
                                                        <>
                                                            <span
                                                                style={{
                                                                    color: finalLottoNumbers[
                                                                        i
                                                                    ][j].correct
                                                                        ? "red"
                                                                        : "black",
                                                                    fontWeight:
                                                                        finalLottoNumbers[
                                                                            i
                                                                        ][j]
                                                                            .correct
                                                                            ? "bold"
                                                                            : "normal"
                                                                }}>
                                                                {col
                                                                    .toString()
                                                                    .padStart(
                                                                        2,
                                                                        "0"
                                                                    )}
                                                            </span>{" "}
                                                            ┆{" "}
                                                        </>
                                                    ) : (
                                                        <span
                                                            style={{
                                                                color: finalLottoNumbers[
                                                                    i
                                                                ][j].correct
                                                                    ? "red"
                                                                    : "black",
                                                                fontWeight:
                                                                    finalLottoNumbers[
                                                                        i
                                                                    ][j].correct
                                                                        ? "bold"
                                                                        : "normal"
                                                            }}>
                                                            {col
                                                                .toString()
                                                                .padStart(
                                                                    2,
                                                                    "0"
                                                                )}
                                                        </span>
                                                    )}
                                                </div>
                                            )
                                        )}
                                    </div>
                                )
                            )}
                            <span>{"=".repeat(48)}</span>
                        </div>

                        <div className={styles["ticket-info"]}>
                            <div className={styles["ticket-info-col-left"]}>
                                <span>Price</span>
                                <span>Draw</span>
                                <Filler />
                                <Filler />
                                <Filler />
                                <span>
                                    RET{" "}
                                    {randomNumber(0, 10000000)
                                        .toString()
                                        .padStart(6, "0")}
                                </span>
                                <Filler />
                            </div>

                            <div className={styles["ticket-info-col-right"]}>
                                <span>$15.00</span>
                                <span>
                                    {randomNumber(0, 1000)
                                        .toString()
                                        .padStart(4, "0")}
                                </span>
                                <span>{getDay().slice(0, 3)}</span>
                                <span>{getDate()}</span>
                                <Filler />
                                <span>
                                    {randomNumber(0, 1000)
                                        .toString()
                                        .padStart(3, "0")}
                                    -
                                    {randomNumber(0, 10000000000)
                                        .toString()
                                        .padStart(10, "0")}
                                    -
                                    {randomNumber(0, 10000)
                                        .toString()
                                        .padStart(4, "0")}
                                </span>
                                <Filler />
                            </div>
                        </div>

                        <svg
                            id="barcode"
                            className={styles["ticket-barcode"]}></svg>
                    </div>
                </div>
            </div>

            <div className={styles["about-container"]} id="about">
                {Object.keys(about).map(
                    (key: string, i: number): JSX.Element =>
                        i < 2 ? (
                            <>
                                <Column
                                    title={key}
                                    description={
                                        about[key as keyof typeof about]
                                    }
                                    key={i}
                                />
                            </>
                        ) : (
                            <Column
                                title={key}
                                description={
                                    <p>
                                        {about[key as keyof typeof about]}
                                        {divisionData.divisions.map(
                                            (
                                                division: Division,
                                                i: number
                                            ): JSX.Element => (
                                                <p
                                                    key={i}
                                                    style={{
                                                        marginBlockStart:
                                                            "0.3rem",
                                                        marginBlockEnd: "0.3rem"
                                                    }}>
                                                    <b>
                                                        Division{" "}
                                                        {division.division} (
                                                        {division.prize})
                                                    </b>{" "}
                                                    - {division.description}
                                                </p>
                                            )
                                        )}
                                    </p>
                                }
                                key={i}
                            />
                        )
                )}
            </div>
        </Page>
    );
};

export default Home;

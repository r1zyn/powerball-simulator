import { Icon } from "./Next";
import type { NextComponent } from "../lib/types";

import { faX } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Disclaimer.module.css";

export const Disclaimer: NextComponent = (): JSX.Element => {
    return (
        <div
            className={styles["disclaimer-container"]}
            id="disclaimer-container">
            <div className={styles["disclaimer-modal"]}>
                <div className={styles["close-btn"]}>
                    <Icon
                        icon={faX}
                        onClick={(e): void => {
                            const element: EventTarget & SVGElement =
                                e.currentTarget;
                            const disclaimerContainer: HTMLElement = (
                                element.parentElement as HTMLElement
                            ).parentElement?.parentElement as HTMLElement;
                            disclaimerContainer.style.display = "none";
                        }}
                    />
                </div>

                <h1 className={styles["disclaimer-title"]}>Disclaimer</h1>

                <p className={styles["disclaimer-text"]}>
                    Last Updated: Monday 3rd October 2022
                    <br />
                    <br />
                    First of all, this site is not serious. This is just a side
                    project, so do not expect anything here to be actually
                    serious (meaning this disclaimer won&apos;t look so formal
                    like other sites). This project was created as a visual and
                    more user-friendly, interactive version of a C# Powerball
                    program. The main use of this site is to simulate the
                    chances of winning money from Powerball (although may noy be
                    fully accurate).
                    <br />
                    <br />
                    Credit also goes to Next.js, in which the site&apos;s theme
                    was taken from (the site&apos;s theme was essentially
                    &quot;borrowed&quot; from Next.js&apos;s site, so got to
                    give them credit). This site was also created with Next.js
                    itself.
                    <br />
                    <br />
                    The code for this project is open-source, meaning it is
                    visible to the public on GitHub. It has been placed under
                    the Unlicense license, meaning there are no limitations to
                    what people can do with this code.
                    <br />
                    <br />
                    Links to Next.js, the GitHub repository and more are listed
                    in the footer. This site is not affiliated with Lotto NZ or any other organisation or group.
                </p>
            </div>
        </div>
    );
};

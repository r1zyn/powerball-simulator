import { Link } from "./Next";
import type { NextComponent } from "../lib/types";

import { scrollToElement } from "../lib/utils";
import styles from "../styles/Footer.module.css";
import { urls } from "../lib/constants";

export const Footer: NextComponent = (): JSX.Element => {
    return (
        <div className={styles["footer-outer"]}>
            <div className={styles["footer-inner"]}>
                <footer className={styles["footer-container"]}>
                    <div className={styles["footer-links"]}>
                        <div>
                            <h4 className="fw5">General</h4>
                            <p>
                                <a
                                    onClick={(): void =>
                                        scrollToElement("about")
                                    }>
                                    About
                                </a>
                            </p>
                            <p>
                                <a
                                    onClick={(): void =>
                                        scrollToElement("simulation-container")
                                    }>
                                    Simulation
                                </a>
                            </p>
                            <p>
                                <Link href={urls.lotto} passHref>
                                    <a
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        Lotto
                                    </a>
                                </Link>
                            </p>
                        </div>
                        <div>
                            <h4 className="fw5">Source</h4>
                            <p>
                                <Link href={urls.github} passHref>
                                    <a
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        GitHub
                                    </a>
                                </Link>
                            </p>
                            <p>
                                <Link href={urls.license} passHref>
                                    <a
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        License
                                    </a>
                                </Link>
                            </p>
                            <p>
                                <Link href={urls.nextjs} passHref>
                                    <a
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        Next.js
                                    </a>
                                </Link>
                            </p>
                        </div>
                        <div>
                            <h4 className="fw5">More</h4>
                            <p>
                                <Link href={urls.sockt} passHref>
                                    <a
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        Sockt
                                    </a>
                                </Link>
                            </p>
                            <p>
                                <Link href={urls.matrix} passHref>
                                    <a
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        Matrix
                                    </a>
                                </Link>
                            </p>
                        </div>
                        <div>
                            <h4 className="fw5">Legal</h4>
                            <p>
                                <a
                                    onClick={(): void => {
                                        const disclaimerContainer: HTMLElement | null =
                                            document.getElementById(
                                                "disclaimer-container"
                                            );
                                        if (disclaimerContainer)
                                            disclaimerContainer.style.display =
                                                "flex";
                                    }}>
                                    Disclaimer
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className={styles["footer-copyright"]}>
                        <div>
                            Made with 🧠 by{" "}
                            <Link href={urls.developer} passHref>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    style={{
                                        textDecoration: "underline"
                                        // borderBottom: "1px solid #666"
                                    }}>
                                    tncz
                                </a>
                            </Link>
                            <br />
                            Developed with{" "}
                            <Link href={urls.nextjs} passHref>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    style={{
                                        textDecoration: "underline"
                                        // borderBottom: "1px solid #666"
                                    }}>
                                    Next.js
                                </a>
                            </Link>{" "}
                            and{" "}
                            <Link href={urls.nodejs} passHref>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    style={{
                                        textDecoration: "underline"
                                        // borderBottom: "1px solid #666"
                                    }}>
                                    Node.js
                                </a>
                            </Link>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

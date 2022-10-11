import type { ErrorProps } from "next/error";
import { Link } from "../components/Next";
import type { NextPageContext } from "next";

import styles from "../styles/404.module.css";

function Error({ statusCode }: ErrorProps): JSX.Element {
    const errorMessage: string = statusCode ?
        statusCode === 404 ? "This page could not be found." : "An internal error occurred." :
        "An error occurred on the client.";

    return (
        <div className={styles["error-container"]}>
            <div>
                <h1 className={styles["error-code"]}>{statusCode}</h1>
                <div className={styles["error-divider"]}>
                    <h1 className={styles["error-message"]}>{errorMessage}</h1>
                </div>
            </div>

            <Link href="/">
                <span className={styles["return-link"]}>Return to home</span>
                </Link>
        </div>
    );
}

Error.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
    const statusCode: number = res ? res.statusCode : err && err.statusCode ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
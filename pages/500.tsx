import { Link } from "../components/Next";
import { Meta } from "../components/Meta";
import type { NextPage } from "next";

import styles from "../styles/Error.module.css";

const Error500: NextPage = (): JSX.Element => {
    const statusCode = 500;
    const errorMessage = "An internal server error occurred.";

    return (
        <>
            <Meta title={`Error ${statusCode} - ${errorMessage.replace(".", "")}`} description={errorMessage} />

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
        </>
    );
};

export default Error500;
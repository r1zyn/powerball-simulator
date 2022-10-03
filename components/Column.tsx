import type { ReactNode } from "react";
import type { NextComponent, Props } from "../lib/types";

import styles from "../styles/Column.module.css";

export type ColumnProps = Props<{
    title: string;
    description: string | ReactNode;
}>;

export const Column: NextComponent<ColumnProps> = (
    props: ColumnProps
): JSX.Element => {
    return (
        <div
            className={styles["column"]}
            data-aos="fade-up"
            data-aos-duration="3000">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
};

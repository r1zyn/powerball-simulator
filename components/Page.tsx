import { Footer } from "./Footer";
import { Fragment } from "react";
import { Header } from "./Header";
import { Meta, MetaProps } from "./Meta";
import type { NextComponent, PropsWithChildren } from "../lib/types";

import styles from "../styles/Page.module.css";

export type PageProps = PropsWithChildren<MetaProps>;

export const Page: NextComponent<PageProps> = (
    props: PageProps
): JSX.Element => {
    return (
        <Fragment>
            <Meta {...props} />
            <Header />
            <main className={styles.main}>{props.children}</main>
            <Footer />
        </Fragment>
    );
};

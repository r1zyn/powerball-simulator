import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Icon } from "./Next";
import type { NextComponent } from "../lib/types";

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Scroll.module.css";

export const ScrollButton: NextComponent = (): JSX.Element => {
    const [visible, toggleVisbility]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);
    const id = "_23rf4dqoE0PM";

    useEffect((): void => {
        const button: HTMLElement | null = document.getElementById(id);

        if (button) {
            if (button.style.display === "none") button.style.cursor = "default";
            else button.style.cursor = "pointer";
        }

        document.addEventListener("scroll", (): void => {
            if (window.pageYOffset > 300) {
                toggleVisbility(true);
            } else {
                toggleVisbility(false);
            }
        });
    });

    return <div className={`${visible ? "fade-in" : "fade-out"} ${styles["scroll-top-button"]}`} style={{ zIndex: 1005 }} onClick={(): void => window.scrollTo({
        top: 0,
        behavior: "smooth"
    })}
        id={id}>
        <Icon icon={faArrowUp} className={styles["scroll-top-icon"]} />
    </div>;
}
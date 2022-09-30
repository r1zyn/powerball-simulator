import { Icon } from "./Next";
import type { NextComponent } from "../lib/types";

import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";
import styles from "../styles/Header.module.css";

export const Header: NextComponent = (): JSX.Element => {
    const { theme, setTheme } = useTheme();

    return (
        <header className={styles.header}>
            <button
                className={styles["theme-button"]}
                onClick={() =>
                    theme === "light" ? setTheme("dark") : setTheme("light")
                }>
                {/* {theme === "light" ? "🌙" : "☀️"} */}
                {theme === "light" ? (
                    <Icon icon={faMoon} className={styles["theme-icon"]} />
                ) : (
                    <Icon icon={faSun} className={styles["theme-icon"]} />
                )}
            </button>
        </header>
    );
};

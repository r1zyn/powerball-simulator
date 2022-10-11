import type { BaseContext } from "next/dist/shared/lib/utils";
import type { CSSProperties } from "react";
import type { NextComponentType } from "next";

/**
 * The default props for any Next.js component.
 */
export interface DefaultProps {
    className?: string;
    id?: string;
    style?: CSSProperties;
}

/**
 * Interface for Powerball division data.
 */
export interface Division {
    division: number;
    prize: string;
    description: string;
}

/**
 * Represents an empty object as a type.
 */
export type EmptyObject = Record<string, never>;

/**
 * Metatdata constants.
 */
export interface Metadata {
    url: string;
    "theme-color": string;
    image: string;
    icon: string;
    keywords: string[];
}

/**
 * Represents a Next.js component.
 */
export type NextComponent<
    P = EmptyObject,
    IP = EmptyObject
> = NextComponentType<BaseContext, IP, P>;

/**
 * Represents the props for a Next.js component.
 */
export type Props<P = EmptyObject> = P & DefaultProps;

/**
 * Represents props with children for a Next.js component.
 */
export type PropsWithChildren<Props = DefaultProps> = Props & {
    children?: React.ReactNode;
};

/**
 * Powerball data.
 */
export interface PowerballData {
    lottoNumbers: number[][];
    finalLottoNumbers: { correct: boolean; value: number }[][];
    totalWinnings: number;
    winningLine: number[];
    bonusball: number;
    powerball: number;
}

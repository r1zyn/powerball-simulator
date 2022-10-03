import type { BaseContext } from "next/dist/shared/lib/utils";
import type { CSSProperties } from "react";
import type { NextComponentType } from "next";

interface DefaultProps {
    className?: string;
    id?: string;
    style?: CSSProperties;
}

export type EmptyObject = Record<string, never>;

export interface Metadata {
    url: string;
    "theme-color": string;
    image: string;
    icon: string;
    keywords: string[];
}

export type NextComponent<
    P = EmptyObject,
    IP = EmptyObject
> = NextComponentType<BaseContext, IP, P>;

export type Props<P = EmptyObject> = P & DefaultProps;

export type PropsWithChildren<Props = DefaultProps> = Props & {
    children?: React.ReactNode;
};

export interface ServerSideProps<P = EmptyObject> {
    props: P;
}

export interface PowerballData {
    lottoNumbers: number[][];
    finalLottoNumbers: { correct: boolean; value: number }[][];
    totalWinnings: number;
    winningLine: number[];
    bonusball: number;
    powerball: number;
}

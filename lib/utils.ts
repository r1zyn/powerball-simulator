import type { PowerballData } from "../lib/types";

/**
 * Inserts the powerball simulator base path into assets under the assets folder
 * @param {string} path The original path of the file
 */
export function assetPath(path: string): string {
    return process.env.NODE_ENV === "production"
        ? `/powerball-simulator${path}`
        : path;
}

/**
 * Matches the file type of a file when given the file name.
 * @param {string} filename The file name
 */
export function fileType(filename: string): string {
    const match: RegExpMatchArray | null = filename.match(/(\.[a-z]{3,})$/g);
    if (!match) throw new Error("Invalid file name provided");
    return match[0].slice(1, match[0].length - 1);
}

/**
 * Returns the current date as a string.
 */
export function getDate(): string {
    const date: Date = new Date();
    return `${date.getDate()} ${getMonth().slice(0, 3)} ${date
        .getFullYear()
        .toString()
        .slice(2, 4)}`;
}

/**
 * Returns the current day as a string.
 */
export function getDay(): string {
    const day: number = new Date().getDay();

    switch (day) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            throw new Error("Invalid day");
    }
}

/**
 * Returns the current month as a string.
 */
export function getMonth(): string {
    const month: number = new Date().getMonth();

    switch (month) {
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";
        default:
            throw new Error("Invalid month");
    }
}

/**
 * Scrolls the page to the element with the matching id.
 * @param {string} id The id of the element
 */
export function scrollToElement(id: string): void {
    const element: HTMLElement | null = document.getElementById(id);

    if (element)
        window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth"
        });
}

/**
 * Returns the lotto ticket numbers, final lotto ticket numbers, the winning line and total winnings.
 */
export function getPowerballData(data: {
    lottoNumbers: number[][];
    finalLottoNumbers: { correct: boolean; value: number }[][];
    winningLine: number[];
    totalWinnings: number;
    bonusball: number;
    powerball: number;
}): PowerballData {
    data.lottoNumbers = [];
    data.finalLottoNumbers = [];
    data.winningLine = [];
    data.totalWinnings = 0;
    data.bonusball = 0;
    data.powerball = 0;

    data.lottoNumbers = generateNumbers(data.lottoNumbers);

    const winningLineData = generateWinningLine(
        data.winningLine,
        data.bonusball,
        data.powerball
    );
    data.winningLine = winningLineData.winningLine;
    data.bonusball = winningLineData.bonusball;
    data.powerball = winningLineData.powerball;

    const divisionData = generateDivisions(
        data.lottoNumbers,
        data.finalLottoNumbers,
        data.winningLine,
        data.totalWinnings,
        data.bonusball,
        data.powerball
    );
    data.finalLottoNumbers = divisionData.finalLottoNumbers;
    data.totalWinnings = divisionData.totalWinnings;

    return {
        lottoNumbers: data.lottoNumbers,
        finalLottoNumbers: data.finalLottoNumbers,
        winningLine: data.winningLine,
        bonusball: data.bonusball,
        powerball: data.powerball,
        totalWinnings: data.totalWinnings
    };
}

export function generateDivisions(
    lottoNumbers: number[][],
    finalLottoNumbers: { correct: boolean; value: number }[][],
    winningLine: number[],
    totalWinnings: number,
    bonusball: number,
    powerball: number
): {
    finalLottoNumbers: { correct: boolean; value: number }[][];
    totalWinnings: number;
} {
    const divisions: number[] = [0, 25111111, 35771, 1270, 110, 55, 41, 15];

    let correctNumbers = 0;
    let hasBonusball = false;
    let hasPowerball = false;

    for (let i = 0; i < 10; i++) {
        finalLottoNumbers.push([]);
        for (let j = 0; j < 8; j++) {
            if (j < 6) {
                if (lottoNumbers[i][j] == winningLine[j]) {
                    correctNumbers++;
                    finalLottoNumbers[i].push({
                        correct: true,
                        value: lottoNumbers[i][j]
                    });
                } else {
                    finalLottoNumbers[i].push({
                        correct: false,
                        value: lottoNumbers[i][j]
                    });
                }
            } else if (j === 6) {
                if (lottoNumbers[i][j] == bonusball) {
                    hasBonusball = true;
                    finalLottoNumbers[i].push({
                        correct: true,
                        value: lottoNumbers[i][j]
                    });
                } else {
                    finalLottoNumbers[i].push({
                        correct: false,
                        value: lottoNumbers[i][j]
                    });
                }
            } else if (j === 7) {
                if (lottoNumbers[i][j] == powerball) {
                    hasPowerball = true;
                    finalLottoNumbers[i].push({
                        correct: true,
                        value: lottoNumbers[i][j]
                    });
                } else {
                    finalLottoNumbers[i].push({
                        correct: false,
                        value: lottoNumbers[i][j]
                    });
                }
            }
        }

        switch (correctNumbers) {
            case 6:
                if (hasPowerball) totalWinnings += divisions[1];
                break;
            case 5:
                if (hasPowerball) {
                    if (hasBonusball) totalWinnings += divisions[2];
                    else totalWinnings += divisions[3];
                }

                break;
            case 4:
                if (hasPowerball) {
                    if (hasBonusball) totalWinnings += divisions[4];
                    else totalWinnings += divisions[5];
                }

                break;
            case 3:
                if (hasPowerball) {
                    if (hasBonusball) totalWinnings += divisions[6];
                    else totalWinnings += divisions[7];
                }

                break;
            default:
                totalWinnings += divisions[0];
                break;
        }

        correctNumbers = 0;
        hasBonusball = false;
        hasPowerball = false;
    }

    return {
        finalLottoNumbers,
        totalWinnings
    };
}

export function generateNumbers(lottoNumbers: number[][]): number[][] {
    for (let i = 0; i < 10; i++) {
        lottoNumbers.push([]);
        for (let j = 0; j < 8; j++) {
            if (j < 7) {
                let random: number = randomNumber(1, 41);

                while (lottoNumbers[i].includes(random))
                    random = randomNumber(1, 41);
                lottoNumbers[i].push(random);
            }
            if (j === 7) {
                let random: number = randomNumber(1, 10);

                while (lottoNumbers[i].includes(random))
                    random = randomNumber(1, 10);
                lottoNumbers[i].push(random);
            }
        }
    }

    return lottoNumbers;
}

export function generateWinningLine(
    winningLine: number[],
    bonusball: number,
    powerball: number
): {
    winningLine: number[];
    bonusball: number;
    powerball: number;
} {
    for (let i = 0; i < 8; i++) {
        if (i < 7) {
            let random: number = randomNumber(1, 41);

            while (winningLine.includes(random)) random = randomNumber(1, 41);
            winningLine[i] = random;
        } else if (i === 7) {
            let random: number = randomNumber(1, 10);

            while (winningLine.includes(random)) random = randomNumber(1, 10);
            winningLine[i] = random;
        }
    }

    bonusball = winningLine[6];
    powerball = winningLine[7];

    return {
        winningLine,
        bonusball,
        powerball
    };
}

export function randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
}

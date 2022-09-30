import type { PowerballData } from "../lib/types";

/**
 * Matches the file type of a file when given the file name.
 * @param {string} filename The file name
 * @returns
 */
export function fileType(filename: string): string {
    const match: RegExpMatchArray | null = filename.match(/(\.[a-z]{3,})$/g);
    if (!match) throw new Error("Invalid file name provided");
    return match[0].slice(1, match[0].length - 1);
}

const lottoNumbers: number[][] = [];
const finalLottoNumbers: { correct: boolean; value: number }[][] = [];
const divisions: number[] = [0, 25111111, 35771, 1270, 110, 55, 41, 15];
const winningLine: number[] = [];

let bonusball = 0;
let powerball = 0;
let totalWinnings = 0;

/**
 * Returns the lotto ticket numbers, final lotto ticket numbers, the winning line and total winnings.
 */
export function getPowerballData(): PowerballData {
    generateNumbers();
    generateWinningLine();
    generateDivisions();

    return {
        lottoNumbers,
        finalLottoNumbers,
        winningLine,
        totalWinnings
    };
}

/**
 * Generates divisions for the lotto numbers.
 */
export function generateDivisions(): void {
    let correctNumbers = 0;
    let hasBonusball = false;
    let hasPowerball = false;

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 8; j++) {
            if (j < 6) {
                if (lottoNumbers[i][j] == winningLine[j]) {
                    correctNumbers++;
                    finalLottoNumbers[i][j] = {
                        correct: true,
                        value: lottoNumbers[i][j]
                    };
                }
            } else if (j === 6) {
                if (lottoNumbers[i][j] == bonusball) {
                    hasBonusball = true;
                    finalLottoNumbers[i][j] = {
                        correct: true,
                        value: lottoNumbers[i][j]
                    };
                }
            } else if (j === 7) {
                if (lottoNumbers[i][j] == powerball) {
                    hasPowerball = true;
                    finalLottoNumbers[i][j] = {
                        correct: true,
                        value: lottoNumbers[i][j]
                    };
                }
            } else {
                finalLottoNumbers[i][j] = {
                    correct: false,
                    value: lottoNumbers[i][j]
                };
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
}

/**
 * Generates random numbers for the powerball ticket.
 */
export function generateNumbers(): void {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 8; j++) {
            if (j < 7) lottoNumbers[i][j] = randomNumber(1, 41);
            if (j === 7) lottoNumbers[i][j] = randomNumber(1, 10);
        }
    }
}

/**
 * Generates the winning line for the powerball ticket.
 */
export function generateWinningLine(): void {
    for (let i = 0; i < 8; i++) {
        if (i < 7) winningLine[i] = randomNumber(1, 41);
        else if (i === 7) winningLine[i] = randomNumber(1, 10);
    }

    bonusball = winningLine[6];
    powerball = winningLine[7];
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 * @param {number} min The minimum number (inclusive)
 * @param {number} max The maximum number (exlusive)
 */
export function randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
}

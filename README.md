<div align="center">
    <h1>Powerball Simulator</h1>
    <div>
        <img src="https://img.shields.io/github/issues/r1zyn/powerball-simulator?logo=github&style=for-the-badge" alt="Issues" />
        <img src="https://img.shields.io/github/commit-activity/m/r1zyn/powerball-simulator?color=yellow&logo=github&style=for-the-badge" alt="Commit activity">
        <img src="https://img.shields.io/github/workflow/status/r1zyn/powerball-simulator/pages-build-deployment?logo=github&style=for-the-badge" alt="Workflow status">
        <img src="https://img.shields.io/github/languages/top/r1zyn/powerball-simulator?logo=typescript&style=for-the-badge" alt="Top language" />
    </div>
    <hr />
</div>

### About

This project incorporates a C# Powerball Power Dip Lotto ticket simulation into an user-interactive site. The Powerball simulation, based on the real Powerball, a lottery game played to earn cash prizes. The game is purely based on the luck of the player, and players can earn money from a range of cash based on their tickets. You can read more about how Powerball works [here](https://mylotto.co.nz/lotto/how-to-play).

The project uses:

* Next.js with TypeScript (Framework)
* Node.js (Runtime)
* yarn (Package manager)
* ESLint (Linter)
* Prettier (Formatter)
* GitHub Pages (Host)
* Fortawesome (Icons)
* AOS (Animations)
* next-themes (Theme toggling)
* jsbarcode (Barcode generation)

### How It Works

This simulation is a close but not exact replica of the real Powerball game. The simulation will generate the tickets with 10 lines, and the winning numbers. The program will then highlight in red any numbers in the ticket that matches any of the winning numbers. Total earnings and winning numbers will also be displayed. You can generate a new ticket and winning numbers by pressing the "Run Simulation" button on the site.

### Deploying

A `deploy` script defined in [`package.json`](package.json) will run `next build` to build the site, and will then output the assets to the [`out`](out) folder. This will then be committed to the `gh-pages` branch to be deployed to GitHub pages. The `assetPrefix` and `basePath` properties in [`next.config.js`](next.config.js) will also need to be changed accordingly.

### Disclaimer

First of all, this site is not serious. This is just a side project, so do not expect anything here to be actually serious (meaning this disclaimer won't look so formal like other sites). This project was created as a visual and more user-friendly, interactive version of a C# Powerball program. The main use of this site is to simulate the chances of winning money from Powerball (although may noy be fully accurate).

Credit also goes to Next.js, in which the site's theme was taken from (the site's theme was essentially "borrowed" from Next.js's site, so got to give them credit). This site was also created with Next.js itself.

The code for this project is open-source, meaning it is visible to the public on GitHub. It has been placed under the Unlicense license, meaning there are no limitations to what people can do with this code.

Links to Next.js, the GitHub repository and more are listed in the footer. This site is not affiliated with Lotto NZ or any other organisation or group.

### Links

* [Site](https://r1zyn.github.io/powerball-simulator)
* [Repository](https://github.com/r1zyn/powerball-simulator)
* [License](https://github.com/r1zyn/powerball-simulator/blob/master/LICENSE)

### License

This open-source project is licensed under the [Unlicense](https://github.com/r1zyn/powerball-simulator/blob/master/LICENSE) license.

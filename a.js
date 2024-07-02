#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.bgGray("\n\t\t\t---ADVENTURE GAME---\n\n"));
console.log("=".repeat(70));
class hero {
    name;
    power = 100;
    static heros;
    constructor(name) {
        this.name = name;
    }
    decreasesPower() {
        this.power -= 20;
    }
    increasePower() {
        this.power = 100;
    }
}
class villian {
    name;
    power = 100;
    static enemys;
    constructor(name) {
        this.name = name;
    }
    decreasesPower() {
        this.power -= 20;
    }
    increasePower() {
        this.power = 100;
    }
}
async function main() {
    const { heroName } = await inquirer.prompt([
        {
            name: "hero",
            type: (chalk.bold("input")),
            message: "\n=> Hero Name...",
        }
    ]);
    const { enemyType } = await inquirer.prompt([
        {
            name: "enemy",
            type: "list",
            choices: ["Zombie", "Witch", "Alein"],
            message: "\n=> Who You Wantin' To Fight With..."
        },
    ]);
    const herob = new hero(heroName);
    const enemy = new villian(enemyType);
    console.log(chalk.bold.bgBlueBright(`\n\t\t\t${hero.name} VS ${villian.name}`));
    let { ready } = await inquirer.prompt([
        {
            name: "ask",
            type: "list",
            choices: ["I'm Ready", "I Was Born Ready"],
            message: "ARE YOU READY?"
        }
    ]);
    do {
        const { action } = await inquirer.prompt([
            {
                name: "action",
                type: "list",
                choices: ["Attack", "Defend", "Run"],
                message: "\n=> Select Your Action Type..."
            }
        ]);
        if (action === "Attack") {
            console.log(chalk.overline.whiteBright(`${hero.name} ROCK!!`));
        }
        else if (action === "Defend") {
            console.log(chalk.overline.yellow(`${villian.name} SHOCK!!`));
        }
        else {
            console.log(chalk.overline.cyan(`BEST OF LUCK ${hero.name}`));
        }
        switch (action) {
            case "Attack":
                const randomNum = Math.random();
                if (randomNum > 0.5) {
                    herob.decreasesPower();
                    console.log(`${hero.name} power: `, chalk.redBright(herob.power));
                    console.log(`${villian.name} power: `, chalk.greenBright(enemy.power));
                }
                else if (randomNum <= 0) {
                    console.log(chalk.red("YOU LOSS!!"), "\n\t\t\tBetter Luck Next Time.");
                    console.log("=".repeat(70));
                    return;
                }
                else {
                    enemy.decreasesPower();
                    console.log(`${hero.name} power: `, chalk.greenBright(herob.power));
                    console.log(`${villian.name} power: `, chalk.redBright(enemy.power));
                    if (herob.power >= 0) {
                        console.log(chalk.bold.bgGreenBright(`${hero.name} WON!!!`));
                    }
                }
                break;
        }
    } while (true);
}
main();

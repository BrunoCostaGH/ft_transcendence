import { BoxMargin, Linewidth } from "./variables";

export class Player {
    constructor({symbol, info}) {
        this.symbol = symbol;
        this.info = info;
        this.score = 0;
        this.myTurn = false;
        this.plays = [];
    }

    addPlay(board, x, y) {
        if (!this.plays.length) {
            this.plays.push([x, y, false]);
            return;
        }

        this.plays.unshift([x, y, false]);

        if (this.plays.length === 4) {
            const firstPlay = this.plays.pop();

            for (let row of board) {
                for (let box of row) {
                    if (firstPlay[0] === box[1][0] && firstPlay[1] === box[1][1]) {
                        box[0] = 0;
                    }
                }
            }
        }
    }

    draw(ctx, size) {
        for (let play of this.plays) {
            if (this.symbol === "X") {
                ctx.beginPath();
                ctx.moveTo(play[0] + BoxMargin, play[1] + BoxMargin);
                ctx.lineTo(play[0] + size - BoxMargin, play[1] + size - BoxMargin);
                ctx.moveTo(play[0] + size - BoxMargin, play[1] + BoxMargin);
                ctx.lineTo(play[0] + BoxMargin, play[1] + size - BoxMargin);
                ctx.lineWidth = Linewidth + Linewidth / 3;
                ctx.strokeStyle = !play[2] ? "#6511ed" : "#370f75";
                ctx.stroke();
            } else {
                ctx.beginPath();
                ctx.arc(play[0] + size / 2, play[1] + size / 2, size / 2.5, 0, 2 * Math.PI);
                ctx.lineWidth = Linewidth + Linewidth / 3;
                ctx.strokeStyle = !play[2] ? "#9461e6" : "#402963";
                ctx.stroke();
            }
        }
    }
}

export class Opponent extends Player {
    constructor({symbol, info}) {
        super({symbol, info});
    }
}

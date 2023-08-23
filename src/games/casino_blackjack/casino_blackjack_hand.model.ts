import {HandModel} from "../../hand.model";
import {CasinoBlackjackCardModel} from "./casino_blackjack_card.model";

export class CasinoBlackjackHandModel extends HandModel<CasinoBlackjackCardModel> {
    constructor() {
        super();
    }

    get value() {
        if (Array.isArray(this.cards) && this.cards.length > 0) {
            const values = this.cards.map(card => card.value)
            return values.reduce((total, item) => total + item)
        } else if (Array.isArray(this.cards)) {
            return 0
        } else {
            throw Error("Cards must be an array")
        }
    }

    get canDoubleDown(): boolean {
        return this.value == 9 || this.value == 10 || this.value == 11;
    }

    get canSplit(): boolean {
        return this.cards.length === 2 &&  this.cards[0].denomination === this.cards[1].denomination
    }
}
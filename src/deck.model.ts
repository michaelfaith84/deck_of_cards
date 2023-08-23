import {CardModel, DENOMINATIONS, SUITS} from "./card.model";
import {shuffle} from "./common.functions";

export class DeckModel<CardType extends CardModel> {
    private _cards: CardType[]

    constructor(type: { new(denomination: string, suit: string): CardType ;} ) {
        this._cards = []
        Object.keys(SUITS).forEach(suit=>{
            Object.keys(DENOMINATIONS).forEach(denomination => {
                this._cards.push(new type(denomination, suit))
            })
        })
    }

    shuffle() {
        shuffle(this._cards)
    }

    cut(position: number) {
        if (position > 95 || position < 5) {
            throw Error("Position must be between 5 and 95")
        }
        const cut = this._cards.splice(Math.floor(this.cardsLeft * position))
        cut.push(...this._cards)
        this._cards = cut
    }

    dealCard() {
        return this._cards.pop()
    }

    get cardsLeft() {
        return this._cards.length
    }

    get cards() {
        return this._cards
    }
}
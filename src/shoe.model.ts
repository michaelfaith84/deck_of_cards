import {CardModel, DENOMINATIONS, SUITS} from "./card.model";
import {shuffle} from "./common.functions";
import {cloneDeep} from "lodash"

export class ShoeModel<CardType extends CardModel> {
    private _cardsTemplate: CardType[]
    private _cards: CardType[]
    private _cutCardPosition:  number

    constructor(type: { new(denomination: string, suit: string): CardType ;}, numberOfDecks: number ) {
        this._cards = []
        this._cardsTemplate = []
        this._cutCardPosition = 0
        for (let i = 0; i < numberOfDecks; i++)
        {
            Object.keys(SUITS).forEach(suit => {
                Object.keys(DENOMINATIONS).forEach(denomination => {
                    this._cardsTemplate.push(new type(denomination, suit))
                })
            })
        }
        this.newCards()
    }

    newCards() {
        this._cards = cloneDeep(this._cardsTemplate)
        this._cutCardPosition = Math.floor(Math.random() * Math.floor(this.cardsLeft * .6)) + Math.floor(this.cardsLeft * .4)
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
        if (this.cardsLeft > 0) {
            return this._cards.pop()
        } else {
            throw Error("No cards in shoe")
        }
    }

    get cardsLeft() {
        return this._cards.length
    }

    get cards() {
        return this._cards
    }

    get reachedCutCard(): boolean {
        return this.cardsLeft === this._cutCardPosition
    }
}
export class HandModel<CardType> {
    private _cards: CardType[]

    constructor() {
        this._cards = []
    }

    get cards() {
        return this._cards;
    }

    addCard(card: CardType):void {
        this._cards.push(card)
    }

    removeCard(card: CardType): CardType {
        const cardIndex = this._cards.indexOf(card)
        if (cardIndex == -1) {
            throw Error("Card not found.")
        }
        return this._cards.splice(cardIndex, 1)[0]
    }

    get length() {
        return this._cards.length
    }
}
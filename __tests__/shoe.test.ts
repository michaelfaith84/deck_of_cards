import {describe, expect, test} from '@jest/globals';
import { ShoeModel} from "../src/shoe.model";
import {CardModel} from "../src/card.model";
import {countMatchingObjects} from "../src/common.functions";

describe("Shoe", () => {
    const cardOne = new CardModel("TWO", "DIAMOND")
    const oneDeckShoeA = new ShoeModel(CardModel, 1)
    const oneDeckShoeB = new ShoeModel(CardModel, 1)
    const twoDeckShoe = new ShoeModel(CardModel, 2)
    test("Initialize", () => {
        expect(oneDeckShoeA).toBeDefined()
        expect(oneDeckShoeA.cards.length).toEqual(52)
        const cardCountOne = countMatchingObjects(oneDeckShoeA.cards, cardOne, ["denomination", "suit"])
        expect(cardCountOne).toEqual(1)
        expect(twoDeckShoe).toBeDefined()
        expect(twoDeckShoe.cards.length).toEqual(104)
        const cardCountTwo = countMatchingObjects(twoDeckShoe.cards, cardOne, ["denomination", "suit"])
        expect(cardCountTwo).toEqual(2)
    })
    test("Cut", () => {
        const cutTest = new ShoeModel(CardModel, 1)
        expect(cutTest.cardsLeft).toEqual(52)
    })
    test("Cut and Shuffle", () => {
        expect(oneDeckShoeA.cards[0].denomination === oneDeckShoeB.cards[0].denomination).toBeTruthy()
        expect(oneDeckShoeA.cards[0].suit === oneDeckShoeB.cards[0].suit).toBeTruthy()
        oneDeckShoeA.cut(40)
        oneDeckShoeA.shuffle()
        expect(oneDeckShoeA.cards[0].denomination === oneDeckShoeB.cards[0].denomination &&
            oneDeckShoeA.cards[0].suit === oneDeckShoeB.cards[0].suit).toBeFalsy()

    })
    test("Invalid Cut", () => {
        expect(() => {oneDeckShoeA.cut(1)}).toThrowError("Position must be between 5 and 95")
        expect(() => {oneDeckShoeA.cut(101)}).toThrowError("Position must be between 5 and 95")
    })
    test("Deal", () => {
        const topCard = oneDeckShoeA.cards[oneDeckShoeA.cardsLeft - 1]
        const dealtCard = oneDeckShoeA.dealCard()
        expect(dealtCard).toBeDefined()
        if (dealtCard) {
            expect(topCard.denomination === dealtCard.denomination).toBeTruthy()
            expect(topCard.suit === dealtCard.suit).toBeTruthy()
            expect(oneDeckShoeA.cards.length).toEqual(51)
        }
    })
    test("Reached Cut Card", () => {
        expect(oneDeckShoeA.reachedCutCard).toBeFalsy()
        while (!oneDeckShoeA.reachedCutCard) {
            oneDeckShoeA.dealCard()
        }
        expect(oneDeckShoeA.reachedCutCard).toBeTruthy()
        expect(oneDeckShoeA.cardsLeft < Math.floor(52 * .6) &&
            oneDeckShoeA.cardsLeft > Math.floor(52 * .4))
    })
    test("New Deck", () => {
        expect(oneDeckShoeA.cardsLeft).toBeLessThan(52)
        oneDeckShoeA.newCards()
        expect(oneDeckShoeA.cardsLeft).toEqual(52)
    })
})
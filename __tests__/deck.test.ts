import {describe, expect, test} from '@jest/globals';
import {DeckModel} from "../src/deck.model";
import {CardModel} from "../src/card.model";

describe("Deck", ()=> {
    const deckOne = new DeckModel(CardModel)
    const deckTwo = new DeckModel(CardModel)
    const deckThree = new DeckModel(CardModel)
    const deckFour = new DeckModel(CardModel)
    test("Initialize new deck", ()=>{
        expect(deckOne).toBeDefined()
        expect(deckOne.cardsLeft).toEqual(52)
    })
    test("Deal Card", () => {
        const cardOne = deckOne.dealCard()
        const cardTwo = deckTwo.dealCard()
        expect(deckOne.cardsLeft).toEqual(51)
        expect(cardOne).toEqual(cardTwo)
    })
    test("Shuffle", ()=> {
        deckOne.shuffle()
        deckTwo.shuffle()
        const cardOne = deckOne.dealCard()
        const cardTwo = deckTwo.dealCard()
        expect(cardOne === cardTwo).toBeFalsy()
    })
    test("Cut", () => {
        deckThree.cut(50)
        expect(deckThree.dealCard() === deckFour.dealCard()).toBeFalsy()
        expect(deckThree.dealCard() !== deckFour.dealCard()).toBeTruthy()
    })
    test("Invalid Cut", () => {
        expect(() => {
            deckThree.cut(4)
        }).toThrowError("Position must be between 5 and 95")
        expect(() => {
            deckThree.cut(96)
        }).toThrowError("Position must be between 5 and 95")
    })
})
import {describe, expect, test} from '@jest/globals';
import {CardModel} from "../src/card.model";

describe("Card", ()=> {
    const cardOne = new CardModel("TWO", "SPADE")
    test("Initialize two of spades", ()=>{
        expect(cardOne).toBeDefined()
        expect(cardOne.suit).toMatch("SPADE")
        expect(cardOne.denomination).toMatch("2")
    })
    test("Card Summary", ()=> {
        expect(cardOne.display.style.color).toMatch("black")
        expect(cardOne.display.style.unicode).toMatch("♠")
    })
    test("Invalid Suit", ()=> {
        expect(CardModel.isSuit("taco")).toBeFalsy()
        expect(() => {
            new CardModel("one", "club")
        }).toThrowError("Invalid denomination")
    })
    test("Invalid Denomination", ()=> {
        expect(CardModel.isDenomination("taco")).toBeFalsy()
        expect(() => {
            new CardModel("two", "taco")
        }).toThrowError("Invalid suit")
    })
    test("Display", () => {
        expect(cardOne.display).toEqual({denomination: "2", suit: "SPADE", style: {color: 'black', unicode: '♠'}})
    })
    test("Works with Lowercase Letters", () => {
        const lowerDenom = new CardModel('jack', 'SPADE')
        expect(lowerDenom.display.denomination).toMatch('J')
        expect(new CardModel('JACK', 'spade').denomination).toBeDefined()
    })
})
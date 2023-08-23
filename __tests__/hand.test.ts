import {describe, expect, test} from '@jest/globals';
import {HandModel} from "../src/hand.model";
import {CardModel} from "../src/card.model";

describe("Hand", ()=> {
    const cardOne = new CardModel("TWO", "SPADE")
    const cardTwo = new CardModel("TWO", "HEART")
    const handOne = new HandModel<CardModel>()
    test("Initialized", ()=> {
        expect(handOne).toBeDefined()
        expect(handOne.length).toEqual(0)
    })
    test("Add Card", ()=> {
        handOne.addCard(cardOne)
        expect(handOne.length).toEqual(1)
    })
    test("Remove Card", () => {
        handOne.addCard(cardTwo)
        const removed = handOne.removeCard(cardOne)
        expect(cardOne).toEqual(removed)
        expect(handOne.length).toEqual(1)
    })
    test("Remove Card Not Present", () => {
        expect(()=> {
            handOne.removeCard(cardOne);
        }).toThrowError("Card not found")
    })
})
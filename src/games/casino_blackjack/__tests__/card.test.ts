import {describe, expect, test} from '@jest/globals';
import { CasinoBlackjackCardModel } from "../casino_blackjack_card.model";

describe("Casino Blackjack Card",  () => {
    const cardOne = new CasinoBlackjackCardModel("TWO", "DIAMOND")
    const aceCard = new CasinoBlackjackCardModel("ACE", "SPADE")
    test("Initialization", () => {
        expect(cardOne).toBeDefined()
        expect(cardOne.isBlind).toBeFalsy()
    })
    test("Toggle isBlind", () => {
        cardOne.toggleIsBlind()
        expect(cardOne.isBlind).toBeTruthy()
        cardOne.toggleIsBlind()
        expect(cardOne.isBlind).toBeFalsy()
    })
    test("Invalid toggleAceHigh", () => {
        expect(() => {
            cardOne.toggleAceHigh()
        }).toThrowError("Card must be an Ace")
    })
    test("toggleAceHigh", () => {
        expect(aceCard.value).toEqual(1)
        aceCard.toggleAceHigh()
        expect(aceCard.value).toEqual(11)
    })
    test('getValue', () => {
        expect(cardOne.value).toEqual(2)
    })
})
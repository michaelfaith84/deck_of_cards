import {describe, expect, test} from '@jest/globals';
import { CasinoBlackjackHandModel } from "../casino_blackjack_hand.model";
import { CasinoBlackjackCardModel } from "../casino_blackjack_card.model";
import {CasinoBlackJackPlayerModel} from "../casino_blackjack_player.model";

describe("Casino Blackjack Hand", () => {
    const cardOne = new CasinoBlackjackCardModel("TWO", "DIAMOND")
    const cardTwo = new CasinoBlackjackCardModel("NINE", "DIAMOND")
    const cardThree = new CasinoBlackjackCardModel("TWO", "SPADE")
    const handSplitable = new CasinoBlackjackHandModel()
    const handDoubleDownable = new CasinoBlackjackHandModel()
    test("Initialize", () => {
        expect(handSplitable).toBeDefined()
        expect(handDoubleDownable).toBeDefined()
    })
    test("Add Cards", () => {
        expect(handSplitable.length).toEqual(0)
        handSplitable.addCard(cardOne)
        handSplitable.addCard(cardThree)
        expect(handSplitable.length).toEqual(2)
        expect(handDoubleDownable.length).toEqual(0)
        handDoubleDownable.addCard(cardOne)
        handDoubleDownable.addCard(cardTwo)
        expect(handDoubleDownable.length).toEqual(2)
    })
    test("Can Split", () => {
        expect(handSplitable.canSplit).toBeTruthy()
        expect(handDoubleDownable.canSplit).toBeFalsy()
    })
    test("Can Double Down", () => {
        expect(handSplitable.canDoubleDown).toBeFalsy()
        expect(handDoubleDownable.canDoubleDown).toBeTruthy()
    })
    test("getValue of Face Card", () => {
        const faceCard = new CasinoBlackjackCardModel("JACK", "CLUB")
        expect(faceCard.value).toEqual(10)
    })
})
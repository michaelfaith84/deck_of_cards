import {describe, expect, test} from '@jest/globals';
import {CasinoBlackJackPlayerModel} from "../casino_blackjack_player.model";
import {CasinoBlackjackCardModel} from "../casino_blackjack_card.model";

describe("Casino Blackjack Player", ()=> {
    const startingMoney = 100
    const bet = 10
    const player = new CasinoBlackJackPlayerModel("Tom", startingMoney)
    const cardOne = new CasinoBlackjackCardModel("TWO", "HEART")
    const cardTwo = new CasinoBlackjackCardModel("TWO", "SPADE")
    const cardThree = new CasinoBlackjackCardModel("NINE", "DIAMOND")
    test("Initialize", ()=> {
        expect(player).toBeDefined()
        expect(player.money).toEqual(startingMoney)
        expect(player.name).toMatch("Tom")
        expect(player.hand.length).toEqual(1)
    })
    test("Insufficient Money", () => {
        expect(() => {
            new CasinoBlackJackPlayerModel("Tom", 0)
        }).toThrowError("Money must be greater than '0'")
    })
    test("Insufficient Add Money", () => {
        expect(() => {
            player.addMoney(0)
        }).toThrowError("Money must be greater than '0'")
    })
    test("Remove Too Much Money", () => {
        expect(() => {
            player.removeMoney(101)
        }).toThrowError("Not enough money")
    })
    test("Can Bet", ()=> {
        expect(player.canBet(bet)).toBeTruthy()
    })
    test("Can't Bet", () => {
        expect(player.canBet(101)).toBeFalsy()
    })
    test("Can Split", () => {
        player.hands[0].addCard(cardOne)
        player.hands[0].addCard(cardTwo)
        expect(player.canSplit(bet)).toBeTruthy()
    })
    test("Split", () => {
        player.split(bet)
        expect(player.hands.length).toEqual(2)
        expect(player.money).toEqual(startingMoney - bet)
        expect(player.hands[0].cards[0]).toEqual(cardOne)
        expect(player.hands[0].length).toEqual(1)
        expect(player.hands[1].cards[0]).toEqual(cardTwo)
        expect(player.hands[1].length).toEqual(1)
    })
    test("Add Money", () => {
        player.addMoney(bet)
        expect(player.money).toEqual(startingMoney)
    })
    test("Reset Hands", () => {
        player.resetHands()
        expect(player.hands.length).toEqual(1)
    })
    test("Cannot Double Down (no cards)", () => {
        expect(player.canDoubleDown(bet)).toBeFalsy()
    })
    test("Can Double Down", ()=> {
        player.hands[0].addCard(cardOne)
        player.hands[0].addCard(cardThree)
        expect(player.canDoubleDown(bet)).toBeTruthy()
    })
    test("Cannot Double Down (no enough money)", () => {
      expect(player.canDoubleDown(101)).toBeFalsy()
    })
    test("Double Down", () => {
        player.doubleDown(bet, 0, cardTwo)
        expect(player.hands[0].length).toEqual(3)
        expect(player.hands[0].cards[2].isBlind).toBeTruthy()
        expect(player.money).toEqual(startingMoney - bet)
    })
})

import {describe, expect, test} from '@jest/globals';
import {CasinoBlackjackModel, rules} from "../casino_blackjack.model";
import {CasinoBlackjackHandModel} from "../casino_blackjack_hand.model";

describe('Casino Blackjack', () => {
    const playerNames = ['Tom', 'Paul', 'Pamela']
    const startingMoney = 100
    const game = new CasinoBlackjackModel(playerNames, startingMoney)
    test('Initialize', () => {
        expect(game.players.length).toEqual(playerNames.length)
    })
    test('getRules', () => {
        expect(game.rules).toEqual(rules)
    })
    test('Dealer has hand', () => {
        expect(game.dealerHand).toBeDefined()
    })
})
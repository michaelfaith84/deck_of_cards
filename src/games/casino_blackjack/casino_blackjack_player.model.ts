import {PlayerModel} from "../../player.model";
import {CasinoBlackjackHandModel} from "./casino_blackjack_hand.model";
import {CasinoBlackjackCardModel} from "./casino_blackjack_card.model";

export class CasinoBlackJackPlayerModel extends PlayerModel<CasinoBlackjackHandModel> {
    private _money: number

    /**
     * Creates a new player
     * @param name
     * @param money
     */
    constructor(name: string, money: number) {
        if (money <= 0) {
            throw Error("Money must be greater than '0'")
        }
        super(name, [new CasinoBlackjackHandModel()]);
        this._money = money
    }

    /**
     * Returns the player's money
     */
    get money(): number {
        return this._money
    }

    /**
     * Adds to the player's money
     * @param money
     */
    addMoney(money: number) {
        if (money <= 0) {
            throw Error("Money must be greater than '0'")
        }
        this._money += money;
    }

    /**
     * Removes money from the player
     * @param money
     */
    removeMoney(money: number) {
        if (money > this._money) {
            throw Error("Not enough money")
        }
        this._money -= Math.abs(money)
    }

    /**
     * Player can afford to bet
     * @param bet
     */
    canBet(bet: number) {
        return this._money >= bet;
    }

    /**
     * Add another hand to the player
     * @param hand
     */
    addHand(hand: CasinoBlackjackHandModel) {
        if (Array.isArray(this.hand)) {
            this.hand.push(hand)
        } else {
            throw Error("Hand must be an array")
        }
    }

    /**
     * Player can afford to split and has a splittable hand
     * @param bet
     */
    canSplit(bet: number): boolean {
        return this.canBet(bet) && this.hands.length === 1 && this.hands[0].canSplit;
    }

    /**
     * Split the player's hand and subtract the new bet amount
     * @param bet
     */
    split(bet: number) {
        this.removeMoney(bet)
        this.addHand(new CasinoBlackjackHandModel())
        this.hands[1].addCard(this.hands[0].removeCard(this.hands[0].cards[1]))
    }

    /**
     * Player can afford to double down and has a hand capable of it
     * @param bet
     */
    canDoubleDown(bet: number): boolean {
        let atLeastOneHandCan = false;
        this.hands.forEach(hand => {
            if (hand.canDoubleDown) {
                atLeastOneHandCan = true;
            }
        })
        return this.canBet(bet) && Array.isArray(this.hand) && atLeastOneHandCan
    }

    /**
     * Doubles down on a specific hand
     * @param bet
     * @param handIndex
     * @param card
     */
    doubleDown(bet: number, handIndex: number, card: CasinoBlackjackCardModel) {
        this.removeMoney(bet)
        card.toggleIsBlind()
        this.hands[handIndex].addCard(card)
    }

    /**
     * Returns the players hands array
     */
    get hands(): CasinoBlackjackHandModel[] {
        if (Array.isArray(this._hand)) {
            return this._hand
        } else {
            throw Error("Hand must be an array")
        }
    }

    /**
     * Resets the player to one empty hand
     */
    resetHands() {
        this._hand = [new CasinoBlackjackHandModel()]
    }
}
import {Game} from "../../game";
import {CasinoBlackJackPlayerModel} from "./casino_blackjack_player.model";
import {CasinoBlackjackCardModel} from "./casino_blackjack_card.model";
import {ShoeModel} from "../../shoe.model";
import {CasinoBlackjackHandModel} from "./casino_blackjack_hand.model";

export class CasinoBlackjackModel implements Game<CasinoBlackJackPlayerModel, CasinoBlackjackCardModel>{
    readonly name = "Casino Blackjack"
    private _dealerHand: CasinoBlackjackHandModel
    private _players: CasinoBlackJackPlayerModel[];
    private _cards: ShoeModel<CasinoBlackjackCardModel>

    constructor(names: string[], startingMoney: number, numberOfDecks = 4) {
        this._cards = new ShoeModel<CasinoBlackjackCardModel>(CasinoBlackjackCardModel, numberOfDecks)
        this._dealerHand = new CasinoBlackjackHandModel()
        this._players = names.map(name => new CasinoBlackJackPlayerModel(name, startingMoney))
    }

    get dealerHand() {
        return this._dealerHand
    }

    get players() {
        return this._players;
    }

    get rules() {
        return rules
    }

    get cards() {
        return this._cards
    }
}

export const rules = {
    objective: 'To get as close to 21 points as you can without going over.',
    scoring: 'Number cards are worth their denominations. All other cards, except aces, are worth ten points. An ace can be counted as one or eleven points.',
    orderOfPlay: 'A shoe containing multiple decks of cards is created and shuffled. A random player is asked to cut the deck by entering a number representing a percentage of the deck to separate. The players are prompted for bets then the if players can split or double down another card) or stand (pass). The dealer will then hit until they reach 17 or greater. Bets are then settled.',
    rules: [
        {
            name: 'Natural Hand',
            text: 'When someone is dealt an ace and "ten" card they start off at 21. This pays out 150% of their bet."'
        },
        {
            name: 'Splitting',
            text: 'When a player is dealt a pair, they may split them into two hands if they have enough money for a second bet.'
        },
        {
            name: 'Double Down',
            text: 'When a player has a hand worth 9, 10, or 11, they may double their initial bet and take one blind card.'
        }
    ]
}
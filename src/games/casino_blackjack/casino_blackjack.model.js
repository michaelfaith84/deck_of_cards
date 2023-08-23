"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rules = exports.CasinoBlackjackModel = void 0;
const casino_blackjack_player_model_1 = require("./casino_blackjack_player.model");
const casino_blackjack_card_model_1 = require("./casino_blackjack_card.model");
const shoe_model_1 = require("../../shoe.model");
const casino_blackjack_hand_model_1 = require("./casino_blackjack_hand.model");
class CasinoBlackjackModel {
    constructor(names, startingMoney, numberOfDecks = 4) {
        this.name = "Casino Blackjack";
        this._cards = new shoe_model_1.ShoeModel(casino_blackjack_card_model_1.CasinoBlackjackCardModel, numberOfDecks);
        this._dealerHand = new casino_blackjack_hand_model_1.CasinoBlackjackHandModel();
        this._players = names.map(name => new casino_blackjack_player_model_1.CasinoBlackJackPlayerModel(name, startingMoney));
    }
    get dealerHand() {
        return this._dealerHand;
    }
    get players() {
        return this._players;
    }
    get rules() {
        return exports.rules;
    }
    get cards() {
        return this._cards;
    }
}
exports.CasinoBlackjackModel = CasinoBlackjackModel;
exports.rules = {
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
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardModel = exports.SUITS = exports.DENOMINATIONS = void 0;
var DENOMINATIONS;
(function (DENOMINATIONS) {
    DENOMINATIONS["TWO"] = "2";
    DENOMINATIONS["THREE"] = "3";
    DENOMINATIONS["FOUR"] = "4";
    DENOMINATIONS["FIVE"] = "5";
    DENOMINATIONS["SIX"] = "6";
    DENOMINATIONS["SEVEN"] = "7";
    DENOMINATIONS["EIGHT"] = "8";
    DENOMINATIONS["NINE"] = "9";
    DENOMINATIONS["TEN"] = "10";
    DENOMINATIONS["JACK"] = "JACK";
    DENOMINATIONS["QUEEN"] = "QUEEN";
    DENOMINATIONS["KING"] = "KING";
    DENOMINATIONS["ACE"] = "ACE";
})(DENOMINATIONS || (exports.DENOMINATIONS = DENOMINATIONS = {}));
var SUITS;
(function (SUITS) {
    SUITS["CLUB"] = "club";
    SUITS["SPADE"] = "spade";
    SUITS["HEART"] = "heart";
    SUITS["DIAMOND"] = "diamond";
})(SUITS || (exports.SUITS = SUITS = {}));
/**
 * Base class representing a playing card
 */
class CardModel {
    constructor(denomination, suit) {
        if (!CardModel.isDenomination(denomination)) {
            throw Error('Invalid denomination');
        }
        if (!CardModel.isSuit(suit)) {
            throw Error('Invalid suit');
        }
        this._denomination = denomination.toUpperCase();
        this._suit = suit.toUpperCase();
    }
    static isDenomination(denomination) {
        return Object.keys(DENOMINATIONS).includes(denomination.toUpperCase());
    }
    static isSuit(suit) {
        return Object.keys(this._suits).includes(suit.toLowerCase());
    }
    get denomination() {
        return DENOMINATIONS[this._denomination];
    }
    get suit() {
        return this._suit;
    }
    get display() {
        return {
            suit: this.suit,
            denomination: this.denomination,
            style: CardModel._suits[this.suit.toLowerCase()]
        };
    }
}
exports.CardModel = CardModel;
/**
 * Map of colors and unicode symbols for suits
 * @private
 */
CardModel._suits = {
    club: {
        color: 'black',
        unicode: '♣'
    },
    spade: {
        color: 'black',
        unicode: '♠'
    },
    heart: {
        color: 'red',
        unicode: '♥'
    },
    diamond: {
        color: 'red',
        unicode: '♦'
    }
};

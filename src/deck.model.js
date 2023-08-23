"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeckModel = void 0;
const card_model_1 = require("./card.model");
const common_functions_1 = require("./common.functions");
class DeckModel {
    constructor(type) {
        this._cards = [];
        Object.keys(card_model_1.SUITS).forEach(suit => {
            Object.keys(card_model_1.DENOMINATIONS).forEach(denomination => {
                this._cards.push(new type(denomination, suit));
            });
        });
    }
    shuffle() {
        (0, common_functions_1.shuffle)(this._cards);
    }
    cut(position) {
        if (position > 95 || position < 5) {
            throw Error("Position must be between 5 and 95");
        }
        const cut = this._cards.splice(Math.floor(this.cardsLeft * position));
        cut.push(...this._cards);
        this._cards = cut;
    }
    dealCard() {
        return this._cards.pop();
    }
    get cardsLeft() {
        return this._cards.length;
    }
    get cards() {
        return this._cards;
    }
}
exports.DeckModel = DeckModel;

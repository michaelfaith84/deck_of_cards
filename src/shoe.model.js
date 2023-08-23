"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoeModel = void 0;
const card_model_1 = require("./card.model");
const common_functions_1 = require("./common.functions");
const lodash_1 = require("lodash");
class ShoeModel {
    constructor(type, numberOfDecks) {
        this._cards = [];
        this._cardsTemplate = [];
        this._cutCardPosition = 0;
        for (let i = 0; i < numberOfDecks; i++) {
            Object.keys(card_model_1.SUITS).forEach(suit => {
                Object.keys(card_model_1.DENOMINATIONS).forEach(denomination => {
                    this._cardsTemplate.push(new type(denomination, suit));
                });
            });
        }
        this.newCards();
    }
    newCards() {
        this._cards = (0, lodash_1.cloneDeep)(this._cardsTemplate);
        this._cutCardPosition = Math.floor(Math.random() * Math.floor(this.cardsLeft * .6)) + Math.floor(this.cardsLeft * .4);
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
        if (this.cardsLeft > 0) {
            return this._cards.pop();
        }
        else {
            throw Error("No cards in shoe");
        }
    }
    get cardsLeft() {
        return this._cards.length;
    }
    get cards() {
        return this._cards;
    }
    get reachedCutCard() {
        return this.cardsLeft === this._cutCardPosition;
    }
}
exports.ShoeModel = ShoeModel;

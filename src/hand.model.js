"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandModel = void 0;
class HandModel {
    constructor() {
        this._cards = [];
    }
    get cards() {
        return this._cards;
    }
    addCard(card) {
        this._cards.push(card);
    }
    removeCard(card) {
        const cardIndex = this._cards.indexOf(card);
        if (cardIndex == -1) {
            throw Error("Card not found.");
        }
        return this._cards.splice(cardIndex, 1)[0];
    }
    get length() {
        return this._cards.length;
    }
}
exports.HandModel = HandModel;

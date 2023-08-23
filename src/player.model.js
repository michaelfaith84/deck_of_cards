"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerModel = void 0;
class PlayerModel {
    constructor(name, hand) {
        if (name === "" || name.match(/^\W+$/) !== null) {
            throw Error("Name must contain at least one character");
        }
        this._hand = hand;
        this._name = name;
    }
    get name() {
        return this._name;
    }
    get hand() {
        return this._hand;
    }
}
exports.PlayerModel = PlayerModel;

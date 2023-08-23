import {CardModel} from "../../card.model";

export class CasinoBlackjackCardModel extends CardModel {
    private _aceHigh: boolean
    private _isBlind: boolean
    constructor(denomination: string, suit: string) {
        super(denomination, suit);
        this._aceHigh = false
        this._isBlind = false
    }

    get value() {
        switch (this.denomination) {
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "10":
                return parseInt(this.denomination)
            case "JACK":
            case "QUEEN":
            case "KING":
                return 10
            default:
                return this._aceHigh ? 11 : 1
        }
    }

    toggleAceHigh() {
        if (this.denomination !== "ACE") {
            throw Error("Card must be an Ace")
        }
        this._aceHigh = !this._aceHigh
    }

    toggleIsBlind() {
        this._isBlind = !this._isBlind
    }

    get isBlind() {
        return this._isBlind
    }
}
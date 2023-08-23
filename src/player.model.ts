import {HandModel} from "./hand.model";

export class PlayerModel<HandType> {
    protected _name: string
    protected _hand: HandType | HandType[]

    constructor(name: string, hand: HandType | HandType[]) {
        if (name === "" || name.match(/^\W+$/) !== null) {
            throw Error("Name must contain at least one character")
        }
        this._hand = hand
        this._name = name
    }

    get name() {
        return this._name
    }

    get hand(): HandType | HandType[] {
        return this._hand
    }
}
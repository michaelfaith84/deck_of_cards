import {PlayerModel} from "./player.model";
import {DeckModel} from "./deck.model";
import {ShoeModel} from "./shoe.model";
import {CardModel} from "./card.model";

interface Game<PlayerType, CardType extends CardModel> {
    name: string
    players: PlayerType[]
    rules: Rules
    cards: DeckModel<CardType> | ShoeModel<CardType>
}

export interface Rules {
    objective: string,
    scoring: string,
    orderOfPlay: string,
    rules: Rule[]
}

export interface Rule {
    name: string
    text: string
}
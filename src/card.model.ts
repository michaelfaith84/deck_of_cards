export enum DENOMINATIONS {
    TWO = '2',
    THREE = '3',
    FOUR = '4',
    FIVE = '5',
    SIX = '6',
    SEVEN = '7',
    EIGHT = '8',
    NINE = '9',
    TEN = '10',
    JACK = 'JACK',
    QUEEN = 'QUEEN',
    KING = 'KING',
    ACE = 'ACE'
}

export enum SUITS {
    CLUB = 'club',
    SPADE = 'spade',
    HEART = 'heart',
    DIAMOND = 'diamond'
}

export interface CardSummary {
    suit: string,
    denomination: string,
    style: Suit
}
export interface Suit {
    color: string
    unicode: string
}

interface SuitMap {
    [key: string]: Suit
}

/**
 * Base class representing a playing card
 */
export class CardModel {
    /**
     * Number of Face of the Card
     * @private
     */
    private readonly _denomination: string;
    /**
     * Suit of card (Spade, Club, Heart, Diamond)
     * @private
     */
    private readonly _suit: string;
    /**
     * Map of colors and unicode symbols for suits
     * @private
     */
    private static _suits: SuitMap = {
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
    }

    constructor(denomination: string, suit: string) {
        if (!CardModel.isDenomination(denomination)) {
            throw Error('Invalid denomination')
        }
        if (!CardModel.isSuit(suit)) {
            throw Error('Invalid suit')
        }
        this._denomination = denomination.toUpperCase();
        this._suit = suit.toUpperCase()
    }

    static isDenomination(denomination: string):boolean {
        return Object.keys(DENOMINATIONS).includes(denomination.toUpperCase())
    }

    static isSuit(suit: string):boolean {
        return Object.keys(this._suits).includes(suit.toLowerCase())
    }

    get denomination() {
        return DENOMINATIONS[this._denomination as keyof typeof DENOMINATIONS];
    }

    get suit() {
        return this._suit;
    }

    get display(): CardSummary {
        return {
            suit: this.suit,
            denomination: this.denomination.length > 2 ? this.denomination[0] : this.denomination,
            style: CardModel._suits[this.suit.toLowerCase()]
        }
    }
}
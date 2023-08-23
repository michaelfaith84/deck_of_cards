import {describe, expect, test} from '@jest/globals';
import { PlayerModel } from "../src/player.model";
import {HandModel} from "../src/hand.model";

describe("Player", ()=> {
    const player = new PlayerModel("Bob", new HandModel())
    test("Initialize", ()=> {
        expect(player).toBeDefined()
    })
    test("Invalid name", () => {
        expect(()=> {
            new PlayerModel("", new HandModel())
        }).toThrowError("Name must contain at least one character")
        expect(()=> {
            new PlayerModel(" ", new HandModel())
        }).toThrowError("Name must contain at least one character")
        expect(()=> {
            new PlayerModel("   ", new HandModel())
        }).toThrowError("Name must contain at least one character")
        expect(()=> {
            new PlayerModel("   ", new HandModel())
        }).toThrowError("Name must contain at least one character")
        expect(()=> {
            new PlayerModel("\n", new HandModel())
        }).toThrowError("Name must contain at least one character")
    })
    test("Hand is Accessible", ()=> {
        expect(player.hand).toBeDefined()
        expect(player.hand.length).toEqual(0)
    })
})
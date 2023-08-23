"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countMatchingObjects = exports.shuffle = void 0;
/**
 * Fisher-Yates (aka Knuth) Shuffle
 * @param array
 */
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
exports.shuffle = shuffle;
/**
 * This is used in testing to verify cards in shoes.
 * @param objectArray
 * @param object
 * @param properties
 */
const countMatchingObjects = (objectArray, object, properties) => {
    let count = 0;
    objectArray.forEach(obj => {
        let matchingValues = 0;
        properties.forEach(key => {
            if (obj[key] === object[key]) {
                matchingValues += 1;
            }
        });
        if (matchingValues === properties.length) {
            count += 1;
        }
    });
    return count;
};
exports.countMatchingObjects = countMatchingObjects;

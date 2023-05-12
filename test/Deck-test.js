const testData = require('./testData');
const testPrototypeQuestions = testData.testPrototypeData;
const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards } = require('../src/deck');

let card1 = testPrototypeQuestions[0];
let card2 = testPrototypeQuestions[1];
let card3 = testPrototypeQuestions[2];
let deck;

beforeEach(function() {
    deck = createDeck(card1, card2, card3);
});

describe('createDeck', function() {
    it('should create a deck of flashcards', function() {
        expect(deck[2].id).to.equal(3);
    });
});

describe('countCards', function() {
    it('should count the number of cards in a deck', function() {
        let deckSize = countCards(deck);

        expect(deckSize).to.equal(3);
    });
});

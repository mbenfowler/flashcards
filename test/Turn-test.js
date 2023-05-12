const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/turn');

describe('evaluateGuess', function() {
    let guess;

    beforeEach(function() {
        guess = "object";
    });

    it('should return correct message when guessed correctly', function() {
        let correctAnswer = "object";
        let message = evaluateGuess(guess, correctAnswer);
        
        expect(message).to.equal("correct!");
    });

    it('should return correct message when guessed incorrectly', function() {
        let correctAnswer = "string";
        let message = evaluateGuess(guess, correctAnswer);
        
        expect(message).to.equal("incorrect!");
    })
});

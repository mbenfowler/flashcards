const testData = require('./testData');
const testPrototypeQuestions = testData.testPrototypeData;
const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');

describe('card', function() {
  let card;
  
  beforeEach(function() {
    let questionOne = testPrototypeQuestions[0];
    card = createCard(questionOne.id, questionOne.question, questionOne.answers, questionOne.correctAnswer);
  });

  it('should create a card and its properties', function() {
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
});
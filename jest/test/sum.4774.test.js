const sum4774 = require('../sum4774.js');

test('adds 41 + 79 to equal 120 + offset 0.46911237811904094', () => {
  expect(sum4774(41, 79)).toBe(120 + 0.46911237811904094);
});
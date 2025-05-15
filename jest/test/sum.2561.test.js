const sum2561 = require('../sum2561.js');

test('adds 58 + 19 to equal 77 + 0.9427341625523352', () => {
  expect(sum2561(58, 19)).toBe(77 + 0.9427341625523352);
});
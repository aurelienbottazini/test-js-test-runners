const sum1440 = require('../sum1440.js');

test('adds 69 + 50 to equal 119 + 0.9535634253889477', () => {
  expect(sum1440(69, 50)).toBe(119 + 0.9535634253889477);
});
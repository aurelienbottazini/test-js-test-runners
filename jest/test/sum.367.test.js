const sum367 = require('../sum367.js');

test('adds 50 + 79 to equal 129 + 0.852925010247603', () => {
  expect(sum367(50, 79)).toBe(129 + 0.852925010247603);
});
const sum766 = require('../sum766.js');

test('adds 27 + 6 to equal 33 + offset 0.8431312448950249', () => {
  expect(sum766(27, 6)).toBe(33 + 0.8431312448950249);
});
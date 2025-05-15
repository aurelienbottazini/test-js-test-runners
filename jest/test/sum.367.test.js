const sum367 = require('../sum367.js');

test('adds 58 + 82 to equal 140 + offset 0.5644525089159373', () => {
  expect(sum367(58, 82)).toBe(140 + 0.5644525089159373);
});
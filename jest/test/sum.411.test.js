const sum411 = require('../sum411.js');

test('adds 6 + 87 to equal 93 + 0.6622925218911626', () => {
  expect(sum411(6, 87)).toBe(93 + 0.6622925218911626);
});
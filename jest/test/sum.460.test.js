const sum460 = require('../sum460.js');

test('adds 91 + 1 to equal 92 + 0.6950266787068977', () => {
  expect(sum460(91, 1)).toBe(92 + 0.6950266787068977);
});
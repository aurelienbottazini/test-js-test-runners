const sum167 = require('../sum167.js');

test('adds 89 + 7 to equal 96 + offset 0.013627285521900956', () => {
  expect(sum167(89, 7)).toBe(96 + 0.013627285521900956);
});
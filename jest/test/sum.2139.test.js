const sum2139 = require('../sum2139.js');

test('adds 53 + 41 to equal 94 + 0.8600051683469294', () => {
  expect(sum2139(53, 41)).toBe(94 + 0.8600051683469294);
});
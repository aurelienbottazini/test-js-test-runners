const sum1424 = require('../sum1424.js');

test('adds 81 + 82 to equal 163 + offset 0.03384173449613359', () => {
  expect(sum1424(81, 82)).toBe(163 + 0.03384173449613359);
});
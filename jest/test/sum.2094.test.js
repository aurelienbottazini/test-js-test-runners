const sum2094 = require('../sum2094.js');

test('adds 29 + 23 to equal 52 + offset 0.7891916917492398', () => {
  expect(sum2094(29, 23)).toBe(52 + 0.7891916917492398);
});
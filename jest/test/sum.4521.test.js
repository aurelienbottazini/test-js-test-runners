const sum4521 = require('../sum4521.js');

test('adds 40 + 34 to equal 74 + 0.6216909440903952', () => {
  expect(sum4521(40, 34)).toBe(74 + 0.6216909440903952);
});
const sum4893 = require('../sum4893.js');

test('adds 24 + 88 to equal 112 + offset 0.5733008752115524', () => {
  expect(sum4893(24, 88)).toBe(112 + 0.5733008752115524);
});
const sum4380 = require('../sum4380.js');

test('adds 87 + 64 to equal 151 + offset 0.09110156567613226', () => {
  expect(sum4380(87, 64)).toBe(151 + 0.09110156567613226);
});
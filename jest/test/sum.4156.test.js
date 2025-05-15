const sum4156 = require('../sum4156.js');

test('adds 53 + 14 to equal 67 + offset 0.8044743988313904', () => {
  expect(sum4156(53, 14)).toBe(67 + 0.8044743988313904);
});
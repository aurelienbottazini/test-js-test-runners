const sum2873 = require('../sum2873.js');

test('adds 87 + 93 to equal 180 + offset 0.6172797150555662', () => {
  expect(sum2873(87, 93)).toBe(180 + 0.6172797150555662);
});
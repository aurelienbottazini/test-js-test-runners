const sum272 = require('../sum272.js');

test('adds 68 + 90 to equal 158 + offset 0.7038365542134597', () => {
  expect(sum272(68, 90)).toBe(158 + 0.7038365542134597);
});
const sum3901 = require('../sum3901.js');

test('adds 1 + 55 to equal 56 + offset 0.5318996912415184', () => {
  expect(sum3901(1, 55)).toBe(56 + 0.5318996912415184);
});
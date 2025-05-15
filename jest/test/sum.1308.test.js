const sum1308 = require('../sum1308.js');

test('adds 68 + 23 to equal 91 + offset 0.2462851602274415', () => {
  expect(sum1308(68, 23)).toBe(91 + 0.2462851602274415);
});
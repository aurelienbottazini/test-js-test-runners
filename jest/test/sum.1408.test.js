const sum1408 = require('../sum1408.js');

test('adds 48 + 46 to equal 94 + offset 0.49955504500106984', () => {
  expect(sum1408(48, 46)).toBe(94 + 0.49955504500106984);
});
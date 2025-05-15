const sum2510 = require('../sum2510.js');

test('adds 8 + 97 to equal 105 + offset 0.9005923318658718', () => {
  expect(sum2510(8, 97)).toBe(105 + 0.9005923318658718);
});
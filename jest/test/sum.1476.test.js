const sum1476 = require('../sum1476.js');

test('adds 59 + 94 to equal 153 + offset 0.03792922263793874', () => {
  expect(sum1476(59, 94)).toBe(153 + 0.03792922263793874);
});
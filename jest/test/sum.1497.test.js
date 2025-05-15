const sum1497 = require('../sum1497.js');

test('adds 40 + 94 to equal 134 + offset 0.9885700242045491', () => {
  expect(sum1497(40, 94)).toBe(134 + 0.9885700242045491);
});
const sum2591 = require('../sum2591.js');

test('adds 30 + 44 to equal 74 + offset 0.7136364633267956', () => {
  expect(sum2591(30, 44)).toBe(74 + 0.7136364633267956);
});
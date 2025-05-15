const sum2454 = require('../sum2454.js');

test('adds 43 + 98 to equal 141 + offset 0.5839768657418961', () => {
  expect(sum2454(43, 98)).toBe(141 + 0.5839768657418961);
});
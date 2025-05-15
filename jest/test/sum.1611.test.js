const sum1611 = require('../sum1611.js');

test('adds 60 + 5 to equal 65 + offset 0.9351654628177754', () => {
  expect(sum1611(60, 5)).toBe(65 + 0.9351654628177754);
});
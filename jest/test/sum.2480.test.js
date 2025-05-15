const sum2480 = require('../sum2480.js');

test('adds 2 + 94 to equal 96 + 0.2857567960415671', () => {
  expect(sum2480(2, 94)).toBe(96 + 0.2857567960415671);
});
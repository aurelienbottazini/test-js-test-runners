const sum799 = require('../sum799.js');

test('adds 51 + 72 to equal 123 + 0.012829449165262186', () => {
  expect(sum799(51, 72)).toBe(123 + 0.012829449165262186);
});
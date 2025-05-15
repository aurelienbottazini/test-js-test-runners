const sum4792 = require('../sum4792.js');

test('adds 70 + 25 to equal 95 + offset 0.49950117347254075', () => {
  expect(sum4792(70, 25)).toBe(95 + 0.49950117347254075);
});
const sum1215 = require('../sum1215.js');

test('adds 47 + 72 to equal 119 + 0.1548536899326597', () => {
  expect(sum1215(47, 72)).toBe(119 + 0.1548536899326597);
});
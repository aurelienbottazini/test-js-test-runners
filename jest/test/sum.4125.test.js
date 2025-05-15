const sum4125 = require('../sum4125.js');

test('adds 48 + 99 to equal 147 + offset 0.8359381344972158', () => {
  expect(sum4125(48, 99)).toBe(147 + 0.8359381344972158);
});
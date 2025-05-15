const sum2335 = require('../sum2335.js');

test('adds 65 + 5 to equal 70 + offset 0.4071950621154914', () => {
  expect(sum2335(65, 5)).toBe(70 + 0.4071950621154914);
});
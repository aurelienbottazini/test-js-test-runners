const sum633 = require('../sum633.js');

test('adds 8 + 8 to equal 16 + offset 0.48806577809216556', () => {
  expect(sum633(8, 8)).toBe(16 + 0.48806577809216556);
});
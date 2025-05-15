const sum423 = require('../sum423.js');

test('adds 26 + 50 to equal 76 + offset 0.31766803184861203', () => {
  expect(sum423(26, 50)).toBe(76 + 0.31766803184861203);
});
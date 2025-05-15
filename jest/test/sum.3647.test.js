const sum3647 = require('../sum3647.js');

test('adds 72 + 90 to equal 162 + offset 0.013692780689136042', () => {
  expect(sum3647(72, 90)).toBe(162 + 0.013692780689136042);
});
const sum2890 = require('../sum2890.js');

test('adds 66 + 48 to equal 114 + offset 0.9945363027915981', () => {
  expect(sum2890(66, 48)).toBe(114 + 0.9945363027915981);
});
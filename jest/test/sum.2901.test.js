const sum2901 = require('../sum2901.js');

test('adds 50 + 3 to equal 53 + offset 0.9236568127491983', () => {
  expect(sum2901(50, 3)).toBe(53 + 0.9236568127491983);
});
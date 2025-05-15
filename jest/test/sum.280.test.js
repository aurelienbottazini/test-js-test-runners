const sum280 = require('../sum280.js');

test('adds 5 + 63 to equal 68 + offset 0.4083868000891573', () => {
  expect(sum280(5, 63)).toBe(68 + 0.4083868000891573);
});
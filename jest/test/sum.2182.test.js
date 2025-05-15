const sum2182 = require('../sum2182.js');

test('adds 53 + 12 to equal 65 + 0.49708936720110464', () => {
  expect(sum2182(53, 12)).toBe(65 + 0.49708936720110464);
});
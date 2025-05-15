const sum2815 = require('../sum2815.js');

test('adds 76 + 96 to equal 172 + 0.4568504405834457', () => {
  expect(sum2815(76, 96)).toBe(172 + 0.4568504405834457);
});
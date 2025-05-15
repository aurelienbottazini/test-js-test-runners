const sum976 = require('../sum976.js');

test('adds 82 + 0 to equal 82 + offset 0.8685002374805182', () => {
  expect(sum976(82, 0)).toBe(82 + 0.8685002374805182);
});
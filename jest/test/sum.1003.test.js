const sum1003 = require('../sum1003.js');

test('adds 21 + 62 to equal 83 + offset 0.4385816931167348', () => {
  expect(sum1003(21, 62)).toBe(83 + 0.4385816931167348);
});
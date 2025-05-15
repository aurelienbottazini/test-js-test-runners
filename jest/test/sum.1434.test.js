const sum1434 = require('../sum1434.js');

test('adds 75 + 73 to equal 148 + offset 0.5893043185635547', () => {
  expect(sum1434(75, 73)).toBe(148 + 0.5893043185635547);
});
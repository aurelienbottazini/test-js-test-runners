const sum1293 = require('../sum1293.js');

test('adds 42 + 52 to equal 94 + 0.6767330502220071', () => {
  expect(sum1293(42, 52)).toBe(94 + 0.6767330502220071);
});
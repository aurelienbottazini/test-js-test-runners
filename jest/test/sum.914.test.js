const sum914 = require('../sum914.js');

test('adds 32 + 70 to equal 102 + 0.16906533221136721', () => {
  expect(sum914(32, 70)).toBe(102 + 0.16906533221136721);
});
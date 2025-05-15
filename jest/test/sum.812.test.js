const sum812 = require('../sum812.js');

test('adds 6 + 26 to equal 32 + 0.6420798194463798', () => {
  expect(sum812(6, 26)).toBe(32 + 0.6420798194463798);
});
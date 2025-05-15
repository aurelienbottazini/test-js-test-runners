const sum2575 = require('../sum2575.js');

test('adds 9 + 92 to equal 101 + 0.4881466075470181', () => {
  expect(sum2575(9, 92)).toBe(101 + 0.4881466075470181);
});
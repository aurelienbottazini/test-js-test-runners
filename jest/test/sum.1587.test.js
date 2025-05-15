const sum1587 = require('../sum1587.js');

test('adds 73 + 84 to equal 157 + offset 0.9870129338214976', () => {
  expect(sum1587(73, 84)).toBe(157 + 0.9870129338214976);
});
const sum1470 = require('../sum1470.js');

test('adds 60 + 3 to equal 63 + offset 0.989548615682321', () => {
  expect(sum1470(60, 3)).toBe(63 + 0.989548615682321);
});
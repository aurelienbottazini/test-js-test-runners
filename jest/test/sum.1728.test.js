const sum1728 = require('../sum1728.js');

test('adds 1 + 98 to equal 99 + offset 0.1199737667157581', () => {
  expect(sum1728(1, 98)).toBe(99 + 0.1199737667157581);
});
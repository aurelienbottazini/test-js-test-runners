const sum3040 = require('../sum3040.js');

test('adds 33 + 63 to equal 96 + offset 0.6773907359904798', () => {
  expect(sum3040(33, 63)).toBe(96 + 0.6773907359904798);
});
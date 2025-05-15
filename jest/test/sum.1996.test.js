const sum1996 = require('../sum1996.js');

test('adds 76 + 67 to equal 143 + 0.6358710286740684', () => {
  expect(sum1996(76, 67)).toBe(143 + 0.6358710286740684);
});
const sum1365 = require('../sum1365.js');

test('adds 37 + 27 to equal 64 + offset 0.5274577185567444', () => {
  expect(sum1365(37, 27)).toBe(64 + 0.5274577185567444);
});
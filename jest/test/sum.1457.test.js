const sum1457 = require('../sum1457.js');

test('adds 23 + 74 to equal 97 + 0.23921188700777207', () => {
  expect(sum1457(23, 74)).toBe(97 + 0.23921188700777207);
});
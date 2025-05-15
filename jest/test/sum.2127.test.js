const sum2127 = require('../sum2127.js');

test('adds 39 + 84 to equal 123 + offset 0.13544089353263788', () => {
  expect(sum2127(39, 84)).toBe(123 + 0.13544089353263788);
});
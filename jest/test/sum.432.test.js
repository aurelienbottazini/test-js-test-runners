const sum432 = require('../sum432.js');

test('adds 82 + 76 to equal 158 + offset 0.1467148305787377', () => {
  expect(sum432(82, 76)).toBe(158 + 0.1467148305787377);
});
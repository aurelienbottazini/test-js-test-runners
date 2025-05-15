const sum1867 = require('../sum1867.js');

test('adds 0 + 12 to equal 12 + offset 0.4680403956324154', () => {
  expect(sum1867(0, 12)).toBe(12 + 0.4680403956324154);
});
const sum3473 = require('../sum3473.js');

test('adds 35 + 3 to equal 38 + offset 0.6362919733857859', () => {
  expect(sum3473(35, 3)).toBe(38 + 0.6362919733857859);
});
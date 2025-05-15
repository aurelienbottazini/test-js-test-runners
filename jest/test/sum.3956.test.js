const sum3956 = require('../sum3956.js');

test('adds 39 + 70 to equal 109 + offset 0.46978446020748343', () => {
  expect(sum3956(39, 70)).toBe(109 + 0.46978446020748343);
});
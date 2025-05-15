const sum2029 = require('../sum2029.js');

test('adds 40 + 84 to equal 124 + offset 0.41186879197750714', () => {
  expect(sum2029(40, 84)).toBe(124 + 0.41186879197750714);
});
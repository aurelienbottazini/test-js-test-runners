const sum3737 = require('../sum3737.js');

test('adds 52 + 64 to equal 116 + 0.550755105875342', () => {
  expect(sum3737(52, 64)).toBe(116 + 0.550755105875342);
});
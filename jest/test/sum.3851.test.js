const sum3851 = require('../sum3851.js');

test('adds 27 + 87 to equal 114 + offset 0.010197114451878209', () => {
  expect(sum3851(27, 87)).toBe(114 + 0.010197114451878209);
});
const sum3270 = require('../sum3270.js');

test('adds 9 + 85 to equal 94 + 0.6266116408375046', () => {
  expect(sum3270(9, 85)).toBe(94 + 0.6266116408375046);
});
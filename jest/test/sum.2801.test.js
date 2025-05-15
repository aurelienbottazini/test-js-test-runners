const sum2801 = require('../sum2801.js');

test('adds 60 + 48 to equal 108 + offset 0.783552192144492', () => {
  expect(sum2801(60, 48)).toBe(108 + 0.783552192144492);
});
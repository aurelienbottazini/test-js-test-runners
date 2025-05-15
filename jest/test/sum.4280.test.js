const sum4280 = require('../sum4280.js');

test('adds 46 + 76 to equal 122 + 0.9866071117051878', () => {
  expect(sum4280(46, 76)).toBe(122 + 0.9866071117051878);
});
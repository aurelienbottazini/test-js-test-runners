const sum3698 = require('../sum3698.js');

test('adds 49 + 33 to equal 82 + offset 0.09982480951853867', () => {
  expect(sum3698(49, 33)).toBe(82 + 0.09982480951853867);
});
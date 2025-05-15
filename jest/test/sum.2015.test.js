const sum2015 = require('../sum2015.js');

test('adds 38 + 39 to equal 77 + 0.007482889201697263', () => {
  expect(sum2015(38, 39)).toBe(77 + 0.007482889201697263);
});
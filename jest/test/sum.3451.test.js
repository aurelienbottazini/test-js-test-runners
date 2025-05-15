const sum3451 = require('../sum3451.js');

test('adds 82 + 39 to equal 121 + 0.9777728677683999', () => {
  expect(sum3451(82, 39)).toBe(121 + 0.9777728677683999);
});
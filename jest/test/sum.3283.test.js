const sum3283 = require('../sum3283.js');

test('adds 11 + 49 to equal 60 + offset 0.00806097714091758', () => {
  expect(sum3283(11, 49)).toBe(60 + 0.00806097714091758);
});
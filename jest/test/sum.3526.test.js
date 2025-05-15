const sum3526 = require('../sum3526.js');

test('adds 37 + 22 to equal 59 + offset 0.8359476981691906', () => {
  expect(sum3526(37, 22)).toBe(59 + 0.8359476981691906);
});
const sum3080 = require('../sum3080.js');

test('adds 30 + 42 to equal 72 + 0.6997065024925364', () => {
  expect(sum3080(30, 42)).toBe(72 + 0.6997065024925364);
});
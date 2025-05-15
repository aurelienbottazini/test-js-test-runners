const sum3712 = require('../sum3712.js');

test('adds 11 + 71 to equal 82 + offset 0.18383759520740783', () => {
  expect(sum3712(11, 71)).toBe(82 + 0.18383759520740783);
});
const sum3458 = require('../sum3458.js');

test('adds 45 + 67 to equal 112 + offset 0.41408714002118363', () => {
  expect(sum3458(45, 67)).toBe(112 + 0.41408714002118363);
});
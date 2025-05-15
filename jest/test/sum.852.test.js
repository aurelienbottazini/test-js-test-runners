const sum852 = require('../sum852.js');

test('adds 2 + 32 to equal 34 + 0.43900753744692966', () => {
  expect(sum852(2, 32)).toBe(34 + 0.43900753744692966);
});
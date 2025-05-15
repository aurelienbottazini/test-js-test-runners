const sum3381 = require('../sum3381.js');

test('adds 91 + 95 to equal 186 + offset 0.37523704513605605', () => {
  expect(sum3381(91, 95)).toBe(186 + 0.37523704513605605);
});
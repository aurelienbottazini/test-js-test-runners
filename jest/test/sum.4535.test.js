const sum4535 = require('../sum4535.js');

test('adds 63 + 42 to equal 105 + offset 0.9698488956065113', () => {
  expect(sum4535(63, 42)).toBe(105 + 0.9698488956065113);
});
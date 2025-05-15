const sum4527 = require('../sum4527.js');

test('adds 73 + 10 to equal 83 + 0.012237506418594779', () => {
  expect(sum4527(73, 10)).toBe(83 + 0.012237506418594779);
});
const sum4386 = require('../sum4386.js');

test('adds 3 + 40 to equal 43 + 0.422781826909183', () => {
  expect(sum4386(3, 40)).toBe(43 + 0.422781826909183);
});
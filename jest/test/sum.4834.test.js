const sum4834 = require('../sum4834.js');

test('adds 41 + 26 to equal 67 + offset 0.7419104074068389', () => {
  expect(sum4834(41, 26)).toBe(67 + 0.7419104074068389);
});
const sum4846 = require('../sum4846.js');

test('adds 30 + 8 to equal 38 + offset 0.5484461595580414', () => {
  expect(sum4846(30, 8)).toBe(38 + 0.5484461595580414);
});
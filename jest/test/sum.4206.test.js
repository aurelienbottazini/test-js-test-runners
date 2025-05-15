const sum4206 = require('../sum4206.js');

test('adds 15 + 68 to equal 83 + offset 0.36004743538079076', () => {
  expect(sum4206(15, 68)).toBe(83 + 0.36004743538079076);
});
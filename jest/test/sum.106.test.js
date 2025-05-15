const sum106 = require('../sum106.js');

test('adds 50 + 0 to equal 50 + offset 0.685397743153522', () => {
  expect(sum106(50, 0)).toBe(50 + 0.685397743153522);
});
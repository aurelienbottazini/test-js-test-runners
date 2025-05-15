const sum106 = require('../sum106.js');

test('adds 28 + 38 to equal 66 + 0.08816516084031223', () => {
  expect(sum106(28, 38)).toBe(66 + 0.08816516084031223);
});
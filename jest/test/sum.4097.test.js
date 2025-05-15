const sum4097 = require('../sum4097.js');

test('adds 98 + 16 to equal 114 + 0.09876189260190282', () => {
  expect(sum4097(98, 16)).toBe(114 + 0.09876189260190282);
});
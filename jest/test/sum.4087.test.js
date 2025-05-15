const sum4087 = require('../sum4087.js');

test('adds 61 + 56 to equal 117 + 0.7297939915924018', () => {
  expect(sum4087(61, 56)).toBe(117 + 0.7297939915924018);
});
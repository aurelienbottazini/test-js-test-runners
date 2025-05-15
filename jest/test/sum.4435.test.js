const sum4435 = require('../sum4435.js');

test('adds 31 + 47 to equal 78 + offset 0.21508397105652488', () => {
  expect(sum4435(31, 47)).toBe(78 + 0.21508397105652488);
});
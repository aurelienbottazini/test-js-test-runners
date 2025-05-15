const sum4172 = require('../sum4172.js');

test('adds 26 + 47 to equal 73 + 0.5101434865799678', () => {
  expect(sum4172(26, 47)).toBe(73 + 0.5101434865799678);
});
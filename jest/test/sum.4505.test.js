const sum4505 = require('../sum4505.js');

test('adds 96 + 22 to equal 118 + 0.08727059912730173', () => {
  expect(sum4505(96, 22)).toBe(118 + 0.08727059912730173);
});
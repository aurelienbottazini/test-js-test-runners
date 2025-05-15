const sum4800 = require('../sum4800.js');

test('adds 53 + 93 to equal 146 + offset 0.3593889750518996', () => {
  expect(sum4800(53, 93)).toBe(146 + 0.3593889750518996);
});
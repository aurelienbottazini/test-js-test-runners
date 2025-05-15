const sum4052 = require('../sum4052.js');

test('adds 33 + 11 to equal 44 + 0.4076254523671652', () => {
  expect(sum4052(33, 11)).toBe(44 + 0.4076254523671652);
});
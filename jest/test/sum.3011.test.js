const sum3011 = require('../sum3011.js');

test('adds 67 + 40 to equal 107 + 0.7286296455827106', () => {
  expect(sum3011(67, 40)).toBe(107 + 0.7286296455827106);
});
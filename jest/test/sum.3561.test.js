const sum3561 = require('../sum3561.js');

test('adds 9 + 21 to equal 30 + 0.08515205726322062', () => {
  expect(sum3561(9, 21)).toBe(30 + 0.08515205726322062);
});
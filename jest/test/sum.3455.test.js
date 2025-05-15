const sum3455 = require('../sum3455.js');

test('adds 85 + 78 to equal 163 + offset 0.5406721349049997', () => {
  expect(sum3455(85, 78)).toBe(163 + 0.5406721349049997);
});
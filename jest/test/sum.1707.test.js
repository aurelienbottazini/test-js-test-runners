const sum1707 = require('../sum1707.js');

test('adds 39 + 90 to equal 129 + offset 0.4859267465760885', () => {
  expect(sum1707(39, 90)).toBe(129 + 0.4859267465760885);
});
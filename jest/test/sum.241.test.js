const sum241 = require('../sum241.js');

test('adds 0 + 67 to equal 67 + 0.6572624462310537', () => {
  expect(sum241(0, 67)).toBe(67 + 0.6572624462310537);
});
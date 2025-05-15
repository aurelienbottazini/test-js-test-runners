const sum2980 = require('../sum2980.js');

test('adds 36 + 58 to equal 94 + 0.3234050986466548', () => {
  expect(sum2980(36, 58)).toBe(94 + 0.3234050986466548);
});
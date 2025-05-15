const sum389 = require('../sum389.js');

test('adds 63 + 9 to equal 72 + offset 0.3803421057653177', () => {
  expect(sum389(63, 9)).toBe(72 + 0.3803421057653177);
});
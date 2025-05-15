const sum4562 = require('../sum4562.js');

test('adds 56 + 38 to equal 94 + 0.3543150017305332', () => {
  expect(sum4562(56, 38)).toBe(94 + 0.3543150017305332);
});
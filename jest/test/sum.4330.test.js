const sum4330 = require('../sum4330.js');

test('adds 5 + 38 to equal 43 + offset 0.7892182573219086', () => {
  expect(sum4330(5, 38)).toBe(43 + 0.7892182573219086);
});
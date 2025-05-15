const sum4106 = require('../sum4106.js');

test('adds 82 + 33 to equal 115 + 0.01304322846861683', () => {
  expect(sum4106(82, 33)).toBe(115 + 0.01304322846861683);
});
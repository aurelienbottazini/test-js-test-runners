const sum924 = require('../sum924.js');

test('adds 14 + 6 to equal 20 + offset 0.7978746858525084', () => {
  expect(sum924(14, 6)).toBe(20 + 0.7978746858525084);
});
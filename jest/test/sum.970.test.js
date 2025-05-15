const sum970 = require('../sum970.js');

test('adds 79 + 42 to equal 121 + 0.8567917921609013', () => {
  expect(sum970(79, 42)).toBe(121 + 0.8567917921609013);
});
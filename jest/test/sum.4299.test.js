const sum4299 = require('../sum4299.js');

test('adds 59 + 28 to equal 87 + 0.1986945730486307', () => {
  expect(sum4299(59, 28)).toBe(87 + 0.1986945730486307);
});
const sum904 = require('../sum904.js');

test('adds 99 + 35 to equal 134 + 0.4389899764915077', () => {
  expect(sum904(99, 35)).toBe(134 + 0.4389899764915077);
});
const sum4464 = require('../sum4464.js');

test('adds 43 + 45 to equal 88 + 0.37826651160854896', () => {
  expect(sum4464(43, 45)).toBe(88 + 0.37826651160854896);
});
const sum2961 = require('../sum2961.js');

test('adds 82 + 45 to equal 127 + offset 0.6062985941411332', () => {
  expect(sum2961(82, 45)).toBe(127 + 0.6062985941411332);
});
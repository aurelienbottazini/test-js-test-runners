const sum2891 = require('../sum2891.js');

test('adds 79 + 45 to equal 124 + 0.2480123639419648', () => {
  expect(sum2891(79, 45)).toBe(124 + 0.2480123639419648);
});
const sum3337 = require('../sum3337.js');

test('adds 42 + 90 to equal 132 + 0.14488180359526404', () => {
  expect(sum3337(42, 90)).toBe(132 + 0.14488180359526404);
});
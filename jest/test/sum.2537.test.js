const sum2537 = require('../sum2537.js');

test('adds 17 + 77 to equal 94 + offset 0.10676562129436318', () => {
  expect(sum2537(17, 77)).toBe(94 + 0.10676562129436318);
});
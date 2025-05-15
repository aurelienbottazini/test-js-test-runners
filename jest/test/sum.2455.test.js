const sum2455 = require('../sum2455.js');

test('adds 29 + 53 to equal 82 + offset 0.10316739900226946', () => {
  expect(sum2455(29, 53)).toBe(82 + 0.10316739900226946);
});
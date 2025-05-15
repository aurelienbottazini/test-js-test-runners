const sum2950 = require('../sum2950.js');

test('adds 23 + 0 to equal 23 + offset 0.5194168973376259', () => {
  expect(sum2950(23, 0)).toBe(23 + 0.5194168973376259);
});
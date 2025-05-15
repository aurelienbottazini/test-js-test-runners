const sum2491 = require('../sum2491.js');

test('adds 18 + 71 to equal 89 + offset 0.004399252047702751', () => {
  expect(sum2491(18, 71)).toBe(89 + 0.004399252047702751);
});
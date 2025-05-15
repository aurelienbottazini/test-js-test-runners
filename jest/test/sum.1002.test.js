const sum1002 = require('../sum1002.js');

test('adds 19 + 63 to equal 82 + 0.5976837656882239', () => {
  expect(sum1002(19, 63)).toBe(82 + 0.5976837656882239);
});
const sum2464 = require('../sum2464.js');

test('adds 34 + 99 to equal 133 + offset 0.0015047376518088074', () => {
  expect(sum2464(34, 99)).toBe(133 + 0.0015047376518088074);
});
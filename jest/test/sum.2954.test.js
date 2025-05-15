const sum2954 = require('../sum2954.js');

test('adds 22 + 74 to equal 96 + offset 0.9542544424662658', () => {
  expect(sum2954(22, 74)).toBe(96 + 0.9542544424662658);
});
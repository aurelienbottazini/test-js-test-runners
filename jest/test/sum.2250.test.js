const sum2250 = require('../sum2250.js');

test('adds 35 + 66 to equal 101 + offset 0.3380859671473734', () => {
  expect(sum2250(35, 66)).toBe(101 + 0.3380859671473734);
});
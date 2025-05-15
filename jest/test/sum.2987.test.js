const sum2987 = require('../sum2987.js');

test('adds 99 + 46 to equal 145 + 0.44123839973029444', () => {
  expect(sum2987(99, 46)).toBe(145 + 0.44123839973029444);
});
const sum2713 = require('../sum2713.js');

test('adds 83 + 88 to equal 171 + 0.6346131063763024', () => {
  expect(sum2713(83, 88)).toBe(171 + 0.6346131063763024);
});
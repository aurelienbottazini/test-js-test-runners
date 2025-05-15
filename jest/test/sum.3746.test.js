const sum3746 = require('../sum3746.js');

test('adds 66 + 47 to equal 113 + offset 0.11395189836715591', () => {
  expect(sum3746(66, 47)).toBe(113 + 0.11395189836715591);
});
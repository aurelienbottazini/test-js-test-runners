const sum2735 = require('../sum2735.js');

test('adds 83 + 51 to equal 134 + 0.4836971956448727', () => {
  expect(sum2735(83, 51)).toBe(134 + 0.4836971956448727);
});
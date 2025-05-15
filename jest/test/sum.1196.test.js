const sum1196 = require('../sum1196.js');

test('adds 14 + 63 to equal 77 + offset 0.5670676338016629', () => {
  expect(sum1196(14, 63)).toBe(77 + 0.5670676338016629);
});
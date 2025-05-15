const sum3854 = require('../sum3854.js');

test('adds 9 + 98 to equal 107 + 0.9155834919472695', () => {
  expect(sum3854(9, 98)).toBe(107 + 0.9155834919472695);
});
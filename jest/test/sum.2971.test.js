const sum2971 = require('../sum2971.js');

test('adds 24 + 60 to equal 84 + offset 0.08841677886134591', () => {
  expect(sum2971(24, 60)).toBe(84 + 0.08841677886134591);
});
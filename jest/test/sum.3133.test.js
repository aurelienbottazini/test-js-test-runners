const sum3133 = require('../sum3133.js');

test('adds 99 + 52 to equal 151 + 0.6433443859388497', () => {
  expect(sum3133(99, 52)).toBe(151 + 0.6433443859388497);
});
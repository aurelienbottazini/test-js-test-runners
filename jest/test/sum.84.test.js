const sum84 = require('../sum84.js');

test('adds 38 + 61 to equal 99 + offset 0.6676401299216256', () => {
  expect(sum84(38, 61)).toBe(99 + 0.6676401299216256);
});
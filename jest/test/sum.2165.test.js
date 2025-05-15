const sum2165 = require('../sum2165.js');

test('adds 69 + 2 to equal 71 + 0.08819182316812135', () => {
  expect(sum2165(69, 2)).toBe(71 + 0.08819182316812135);
});
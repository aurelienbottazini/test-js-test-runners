const sum1618 = require('../sum1618.js');

test('adds 1 + 46 to equal 47 + 0.8437525834545305', () => {
  expect(sum1618(1, 46)).toBe(47 + 0.8437525834545305);
});
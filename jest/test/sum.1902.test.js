const sum1902 = require('../sum1902.js');

test('adds 87 + 31 to equal 118 + offset 0.32634030100159617', () => {
  expect(sum1902(87, 31)).toBe(118 + 0.32634030100159617);
});
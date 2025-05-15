const sum3807 = require('../sum3807.js');

test('adds 14 + 88 to equal 102 + offset 0.267406763090257', () => {
  expect(sum3807(14, 88)).toBe(102 + 0.267406763090257);
});
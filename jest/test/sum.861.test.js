const sum861 = require('../sum861.js');

test('adds 14 + 17 to equal 31 + offset 0.7304353344120854', () => {
  expect(sum861(14, 17)).toBe(31 + 0.7304353344120854);
});
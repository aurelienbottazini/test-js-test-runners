const sum740 = require('../sum740.js');

test('adds 40 + 99 to equal 139 + 0.32728120968158003', () => {
  expect(sum740(40, 99)).toBe(139 + 0.32728120968158003);
});
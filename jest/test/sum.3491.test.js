const sum3491 = require('../sum3491.js');

test('adds 10 + 38 to equal 48 + offset 0.30199005735842477', () => {
  expect(sum3491(10, 38)).toBe(48 + 0.30199005735842477);
});
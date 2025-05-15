const sum1453 = require('../sum1453.js');

test('adds 98 + 62 to equal 160 + offset 0.11694377652343324', () => {
  expect(sum1453(98, 62)).toBe(160 + 0.11694377652343324);
});
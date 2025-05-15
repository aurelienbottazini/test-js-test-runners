const sum3339 = require('../sum3339.js');

test('adds 87 + 20 to equal 107 + 0.5079622674674565', () => {
  expect(sum3339(87, 20)).toBe(107 + 0.5079622674674565);
});
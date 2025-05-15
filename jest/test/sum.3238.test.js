const sum3238 = require('../sum3238.js');

test('adds 65 + 53 to equal 118 + offset 0.08746280820036612', () => {
  expect(sum3238(65, 53)).toBe(118 + 0.08746280820036612);
});
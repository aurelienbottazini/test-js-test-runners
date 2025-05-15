const sum311 = require('../sum311.js');

test('adds 33 + 68 to equal 101 + offset 0.209452009599979', () => {
  expect(sum311(33, 68)).toBe(101 + 0.209452009599979);
});
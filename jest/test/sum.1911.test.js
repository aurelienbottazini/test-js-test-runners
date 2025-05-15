const sum1911 = require('../sum1911.js');

test('adds 25 + 16 to equal 41 + offset 0.5957297016070167', () => {
  expect(sum1911(25, 16)).toBe(41 + 0.5957297016070167);
});
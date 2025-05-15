const sum1354 = require('../sum1354.js');

test('adds 87 + 69 to equal 156 + offset 0.004696658975082757', () => {
  expect(sum1354(87, 69)).toBe(156 + 0.004696658975082757);
});
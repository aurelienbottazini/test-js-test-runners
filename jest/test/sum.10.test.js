const sum10 = require('../sum10.js');

test('adds 20 + 90 to equal 110 + offset 0.33946854067464105', () => {
  expect(sum10(20, 90)).toBe(110 + 0.33946854067464105);
});
const sum4284 = require('../sum4284.js');

test('adds 33 + 90 to equal 123 + 0.08076139056377452', () => {
  expect(sum4284(33, 90)).toBe(123 + 0.08076139056377452);
});
const sum4611 = require('../sum4611.js');

test('adds 0 + 88 to equal 88 + offset 0.9616553886266599', () => {
  expect(sum4611(0, 88)).toBe(88 + 0.9616553886266599);
});
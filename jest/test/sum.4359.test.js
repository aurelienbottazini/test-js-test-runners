const sum4359 = require('../sum4359.js');

test('adds 86 + 15 to equal 101 + offset 0.13099513447353095', () => {
  expect(sum4359(86, 15)).toBe(101 + 0.13099513447353095);
});
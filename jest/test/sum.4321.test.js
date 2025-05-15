const sum4321 = require('../sum4321.js');

test('adds 99 + 44 to equal 143 + 0.15351708703990374', () => {
  expect(sum4321(99, 44)).toBe(143 + 0.15351708703990374);
});
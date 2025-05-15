const sum4522 = require('../sum4522.js');

test('adds 2 + 49 to equal 51 + offset 0.29440317199889', () => {
  expect(sum4522(2, 49)).toBe(51 + 0.29440317199889);
});
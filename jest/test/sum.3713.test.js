const sum3713 = require('../sum3713.js');

test('adds 50 + 6 to equal 56 + 0.09505838529257049', () => {
  expect(sum3713(50, 6)).toBe(56 + 0.09505838529257049);
});
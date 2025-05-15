const sum1651 = require('../sum1651.js');

test('adds 97 + 48 to equal 145 + offset 0.06467635431842222', () => {
  expect(sum1651(97, 48)).toBe(145 + 0.06467635431842222);
});
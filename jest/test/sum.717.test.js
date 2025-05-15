const sum717 = require('../sum717.js');

test('adds 75 + 17 to equal 92 + 0.9867134173760098', () => {
  expect(sum717(75, 17)).toBe(92 + 0.9867134173760098);
});
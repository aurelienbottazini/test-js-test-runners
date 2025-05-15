const sum4077 = require('../sum4077.js');

test('adds 15 + 12 to equal 27 + offset 0.869260896749833', () => {
  expect(sum4077(15, 12)).toBe(27 + 0.869260896749833);
});
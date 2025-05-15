const sum666 = require('../sum666.js');

test('adds 90 + 52 to equal 142 + offset 0.20142356952920148', () => {
  expect(sum666(90, 52)).toBe(142 + 0.20142356952920148);
});
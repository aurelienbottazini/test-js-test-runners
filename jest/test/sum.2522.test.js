const sum2522 = require('../sum2522.js');

test('adds 25 + 6 to equal 31 + 0.2688784698799265', () => {
  expect(sum2522(25, 6)).toBe(31 + 0.2688784698799265);
});
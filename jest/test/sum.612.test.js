const sum612 = require('../sum612.js');

test('adds 45 + 12 to equal 57 + 0.7631122577653947', () => {
  expect(sum612(45, 12)).toBe(57 + 0.7631122577653947);
});
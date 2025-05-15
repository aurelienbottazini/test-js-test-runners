const sum659 = require('../sum659.js');

test('adds 51 + 21 to equal 72 + offset 0.5559951353853496', () => {
  expect(sum659(51, 21)).toBe(72 + 0.5559951353853496);
});
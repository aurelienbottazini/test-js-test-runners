const sum558 = require('../sum558.js');

test('adds 41 + 40 to equal 81 + offset 0.9700275615743094', () => {
  expect(sum558(41, 40)).toBe(81 + 0.9700275615743094);
});
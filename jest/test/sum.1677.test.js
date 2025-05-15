const sum1677 = require('../sum1677.js');

test('adds 54 + 1 to equal 55 + 0.6332535941323948', () => {
  expect(sum1677(54, 1)).toBe(55 + 0.6332535941323948);
});
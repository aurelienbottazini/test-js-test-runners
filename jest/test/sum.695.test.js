const sum695 = require('../sum695.js');

test('adds 9 + 2 to equal 11 + 0.9458577493428039', () => {
  expect(sum695(9, 2)).toBe(11 + 0.9458577493428039);
});
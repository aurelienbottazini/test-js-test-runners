const sum761 = require('../sum761.js');

test('adds 29 + 11 to equal 40 + 0.5439688998949528', () => {
  expect(sum761(29, 11)).toBe(40 + 0.5439688998949528);
});
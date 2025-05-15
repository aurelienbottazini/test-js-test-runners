const sum859 = require('../sum859.js');

test('adds 55 + 17 to equal 72 + 0.5692439334202625', () => {
  expect(sum859(55, 17)).toBe(72 + 0.5692439334202625);
});
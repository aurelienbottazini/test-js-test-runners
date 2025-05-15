const sum817 = require('../sum817.js');

test('adds 62 + 23 to equal 85 + 0.801468650849966', () => {
  expect(sum817(62, 23)).toBe(85 + 0.801468650849966);
});
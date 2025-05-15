const sum2100 = require('../sum2100.js');

test('adds 26 + 42 to equal 68 + offset 0.538024142714332', () => {
  expect(sum2100(26, 42)).toBe(68 + 0.538024142714332);
});
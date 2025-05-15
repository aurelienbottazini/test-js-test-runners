const sum860 = require('../sum860.js');

test('adds 43 + 48 to equal 91 + offset 0.2669895033381441', () => {
  expect(sum860(43, 48)).toBe(91 + 0.2669895033381441);
});
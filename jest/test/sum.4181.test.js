const sum4181 = require('../sum4181.js');

test('adds 85 + 36 to equal 121 + 0.16719286174102987', () => {
  expect(sum4181(85, 36)).toBe(121 + 0.16719286174102987);
});
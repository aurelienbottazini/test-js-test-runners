const sum772 = require('../sum772.js');

test('adds 78 + 86 to equal 164 + offset 0.26608780956057987', () => {
  expect(sum772(78, 86)).toBe(164 + 0.26608780956057987);
});
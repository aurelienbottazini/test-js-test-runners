const sum4560 = require('../sum4560.js');

test('adds 0 + 86 to equal 86 + offset 0.35304648023714313', () => {
  expect(sum4560(0, 86)).toBe(86 + 0.35304648023714313);
});
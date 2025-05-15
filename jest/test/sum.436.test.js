const sum436 = require('../sum436.js');

test('adds 16 + 5 to equal 21 + offset 0.6950170504344411', () => {
  expect(sum436(16, 5)).toBe(21 + 0.6950170504344411);
});
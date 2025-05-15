const sum392 = require('../sum392.js');

test('adds 37 + 97 to equal 134 + 0.778621241763469', () => {
  expect(sum392(37, 97)).toBe(134 + 0.778621241763469);
});
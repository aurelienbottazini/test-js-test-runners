const sum4144 = require('../sum4144.js');

test('adds 86 + 93 to equal 179 + 0.8954672622991281', () => {
  expect(sum4144(86, 93)).toBe(179 + 0.8954672622991281);
});
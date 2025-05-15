const sum4519 = require('../sum4519.js');

test('adds 21 + 15 to equal 36 + 0.7899281778544285', () => {
  expect(sum4519(21, 15)).toBe(36 + 0.7899281778544285);
});
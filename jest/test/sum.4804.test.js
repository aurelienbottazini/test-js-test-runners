const sum4804 = require('../sum4804.js');

test('adds 0 + 91 to equal 91 + 0.3643604166749268', () => {
  expect(sum4804(0, 91)).toBe(91 + 0.3643604166749268);
});
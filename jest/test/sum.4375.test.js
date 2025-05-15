const sum4375 = require('../sum4375.js');

test('adds 66 + 32 to equal 98 + 0.6649735351039864', () => {
  expect(sum4375(66, 32)).toBe(98 + 0.6649735351039864);
});
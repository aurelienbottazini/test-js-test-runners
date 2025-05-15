const sum4272 = require('../sum4272.js');

test('adds 22 + 59 to equal 81 + offset 0.7263276686714337', () => {
  expect(sum4272(22, 59)).toBe(81 + 0.7263276686714337);
});
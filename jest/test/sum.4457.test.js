const sum4457 = require('../sum4457.js');

test('adds 0 + 59 to equal 59 + 0.9456410908766911', () => {
  expect(sum4457(0, 59)).toBe(59 + 0.9456410908766911);
});
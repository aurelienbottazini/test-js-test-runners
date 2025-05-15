const sum4682 = require('../sum4682.js');

test('adds 91 + 52 to equal 143 + 0.3397050171418783', () => {
  expect(sum4682(91, 52)).toBe(143 + 0.3397050171418783);
});
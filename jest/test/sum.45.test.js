const sum45 = require('../sum45.js');

test('adds 92 + 36 to equal 128 + offset 0.967672738814509', () => {
  expect(sum45(92, 36)).toBe(128 + 0.967672738814509);
});
const sum321 = require('../sum321.js');

test('adds 48 + 36 to equal 84 + offset 0.9307719239660501', () => {
  expect(sum321(48, 36)).toBe(84 + 0.9307719239660501);
});
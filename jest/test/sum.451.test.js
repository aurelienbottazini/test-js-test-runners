const sum451 = require('../sum451.js');

test('adds 91 + 47 to equal 138 + offset 0.8482697353448235', () => {
  expect(sum451(91, 47)).toBe(138 + 0.8482697353448235);
});
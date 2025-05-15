const sum4362 = require('../sum4362.js');

test('adds 99 + 27 to equal 126 + 0.056946124504530515', () => {
  expect(sum4362(99, 27)).toBe(126 + 0.056946124504530515);
});
const sum364 = require('../sum364.js');

test('adds 17 + 73 to equal 90 + offset 0.7402301044684564', () => {
  expect(sum364(17, 73)).toBe(90 + 0.7402301044684564);
});
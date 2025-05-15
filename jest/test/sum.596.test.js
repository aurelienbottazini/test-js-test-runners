const sum596 = require('../sum596.js');

test('adds 29 + 68 to equal 97 + offset 0.7013397622451687', () => {
  expect(sum596(29, 68)).toBe(97 + 0.7013397622451687);
});
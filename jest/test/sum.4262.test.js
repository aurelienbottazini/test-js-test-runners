const sum4262 = require('../sum4262.js');

test('adds 81 + 97 to equal 178 + offset 0.7523137223696827', () => {
  expect(sum4262(81, 97)).toBe(178 + 0.7523137223696827);
});
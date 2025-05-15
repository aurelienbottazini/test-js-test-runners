const sum4252 = require('../sum4252.js');

test('adds 54 + 51 to equal 105 + 0.7730912919927423', () => {
  expect(sum4252(54, 51)).toBe(105 + 0.7730912919927423);
});
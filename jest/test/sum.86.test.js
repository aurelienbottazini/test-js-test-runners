const sum86 = require('../sum86.js');

test('adds 82 + 1 to equal 83 + offset 0.3930312037482735', () => {
  expect(sum86(82, 1)).toBe(83 + 0.3930312037482735);
});
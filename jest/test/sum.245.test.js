const sum245 = require('../sum245.js');

test('adds 97 + 89 to equal 186 + 0.43603151391394857', () => {
  expect(sum245(97, 89)).toBe(186 + 0.43603151391394857);
});
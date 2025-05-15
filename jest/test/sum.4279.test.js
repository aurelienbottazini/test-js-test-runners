const sum4279 = require('../sum4279.js');

test('adds 26 + 22 to equal 48 + 0.44715858034065015', () => {
  expect(sum4279(26, 22)).toBe(48 + 0.44715858034065015);
});
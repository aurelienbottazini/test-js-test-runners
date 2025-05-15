const sum10 = require('../sum10.js');

test('adds 19 + 89 to equal 108 + 0.9575531632041145', () => {
  expect(sum10(19, 89)).toBe(108 + 0.9575531632041145);
});
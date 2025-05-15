const sum4350 = require('../sum4350.js');

test('adds 56 + 22 to equal 78 + offset 0.399509167364019', () => {
  expect(sum4350(56, 22)).toBe(78 + 0.399509167364019);
});
const sum4703 = require('../sum4703.js');

test('adds 22 + 33 to equal 55 + offset 0.8376154570997391', () => {
  expect(sum4703(22, 33)).toBe(55 + 0.8376154570997391);
});
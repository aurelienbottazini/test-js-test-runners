const sum4676 = require('../sum4676.js');

test('adds 15 + 4 to equal 19 + offset 0.5847725539408277', () => {
  expect(sum4676(15, 4)).toBe(19 + 0.5847725539408277);
});
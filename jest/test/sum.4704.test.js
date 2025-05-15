const sum4704 = require('../sum4704.js');

test('adds 65 + 27 to equal 92 + 0.925738460082943', () => {
  expect(sum4704(65, 27)).toBe(92 + 0.925738460082943);
});
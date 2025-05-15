const sum4407 = require('../sum4407.js');

test('adds 47 + 89 to equal 136 + 0.939209750814187', () => {
  expect(sum4407(47, 89)).toBe(136 + 0.939209750814187);
});
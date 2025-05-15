const sum4875 = require('../sum4875.js');

test('adds 4 + 19 to equal 23 + offset 0.4162851959932221', () => {
  expect(sum4875(4, 19)).toBe(23 + 0.4162851959932221);
});
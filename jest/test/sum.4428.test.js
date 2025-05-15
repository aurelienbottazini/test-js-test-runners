const sum4428 = require('../sum4428.js');

test('adds 50 + 86 to equal 136 + offset 0.776927781153167', () => {
  expect(sum4428(50, 86)).toBe(136 + 0.776927781153167);
});
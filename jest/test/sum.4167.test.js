const sum4167 = require('../sum4167.js');

test('adds 68 + 50 to equal 118 + offset 0.6179009286376187', () => {
  expect(sum4167(68, 50)).toBe(118 + 0.6179009286376187);
});
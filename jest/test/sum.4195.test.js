const sum4195 = require('../sum4195.js');

test('adds 83 + 47 to equal 130 + offset 0.2449355806809187', () => {
  expect(sum4195(83, 47)).toBe(130 + 0.2449355806809187);
});
const sum4500 = require('../sum4500.js');

test('adds 6 + 62 to equal 68 + offset 0.46060690537477333', () => {
  expect(sum4500(6, 62)).toBe(68 + 0.46060690537477333);
});
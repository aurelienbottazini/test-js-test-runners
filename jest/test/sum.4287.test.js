const sum4287 = require('../sum4287.js');

test('adds 37 + 57 to equal 94 + 0.43627841937175804', () => {
  expect(sum4287(37, 57)).toBe(94 + 0.43627841937175804);
});
const sum2547 = require('../sum2547.js');

test('adds 32 + 31 to equal 63 + offset 0.30149833051498076', () => {
  expect(sum2547(32, 31)).toBe(63 + 0.30149833051498076);
});
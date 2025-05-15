const sum4853 = require('../sum4853.js');

test('adds 62 + 49 to equal 111 + offset 0.17260288594230677', () => {
  expect(sum4853(62, 49)).toBe(111 + 0.17260288594230677);
});
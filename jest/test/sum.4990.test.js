const sum4990 = require('../sum4990.js');

test('adds 33 + 3 to equal 36 + offset 0.10438779396973785', () => {
  expect(sum4990(33, 3)).toBe(36 + 0.10438779396973785);
});
const sum4630 = require('../sum4630.js');

test('adds 4 + 11 to equal 15 + 0.8836241907804641', () => {
  expect(sum4630(4, 11)).toBe(15 + 0.8836241907804641);
});
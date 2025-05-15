const sum2598 = require('../sum2598.js');

test('adds 33 + 93 to equal 126 + offset 0.3634310834883785', () => {
  expect(sum2598(33, 93)).toBe(126 + 0.3634310834883785);
});
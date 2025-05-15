const sum2334 = require('../sum2334.js');

test('adds 33 + 59 to equal 92 + offset 0.09415886744086832', () => {
  expect(sum2334(33, 59)).toBe(92 + 0.09415886744086832);
});
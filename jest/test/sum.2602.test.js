const sum2602 = require('../sum2602.js');

test('adds 39 + 79 to equal 118 + offset 0.2720876433227448', () => {
  expect(sum2602(39, 79)).toBe(118 + 0.2720876433227448);
});
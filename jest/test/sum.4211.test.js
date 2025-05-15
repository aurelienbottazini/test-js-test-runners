const sum4211 = require('../sum4211.js');

test('adds 72 + 21 to equal 93 + offset 0.5193606663914114', () => {
  expect(sum4211(72, 21)).toBe(93 + 0.5193606663914114);
});
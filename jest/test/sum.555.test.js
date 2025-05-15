const sum555 = require('../sum555.js');

test('adds 96 + 49 to equal 145 + 0.5243564901905574', () => {
  expect(sum555(96, 49)).toBe(145 + 0.5243564901905574);
});
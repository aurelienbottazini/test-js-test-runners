const sum4543 = require('../sum4543.js');

test('adds 61 + 45 to equal 106 + 0.06291913659154424', () => {
  expect(sum4543(61, 45)).toBe(106 + 0.06291913659154424);
});
const sum850 = require('../sum850.js');

test('adds 58 + 35 to equal 93 + offset 0.0018971923374273558', () => {
  expect(sum850(58, 35)).toBe(93 + 0.0018971923374273558);
});
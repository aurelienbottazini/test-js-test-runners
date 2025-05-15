const sum3974 = require('../sum3974.js');

test('adds 93 + 29 to equal 122 + offset 0.40215860181349183', () => {
  expect(sum3974(93, 29)).toBe(122 + 0.40215860181349183);
});
const sum4780 = require('../sum4780.js');

test('adds 96 + 73 to equal 169 + offset 0.9635107194487506', () => {
  expect(sum4780(96, 73)).toBe(169 + 0.9635107194487506);
});
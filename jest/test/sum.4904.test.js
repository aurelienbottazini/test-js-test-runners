const sum4904 = require('../sum4904.js');

test('adds 98 + 51 to equal 149 + 0.9439902941439472', () => {
  expect(sum4904(98, 51)).toBe(149 + 0.9439902941439472);
});
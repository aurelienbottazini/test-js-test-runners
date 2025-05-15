const sum2659 = require('../sum2659.js');

test('adds 83 + 99 to equal 182 + offset 0.4367035948184391', () => {
  expect(sum2659(83, 99)).toBe(182 + 0.4367035948184391);
});
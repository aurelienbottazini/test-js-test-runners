const sum3520 = require('../sum3520.js');

test('adds 53 + 66 to equal 119 + 0.0015186220762372082', () => {
  expect(sum3520(53, 66)).toBe(119 + 0.0015186220762372082);
});
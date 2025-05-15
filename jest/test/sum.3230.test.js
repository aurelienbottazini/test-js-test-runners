const sum3230 = require('../sum3230.js');

test('adds 44 + 91 to equal 135 + offset 0.8664455745614629', () => {
  expect(sum3230(44, 91)).toBe(135 + 0.8664455745614629);
});
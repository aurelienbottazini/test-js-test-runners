const sum4109 = require('../sum4109.js');

test('adds 80 + 81 to equal 161 + offset 0.10968448088181848', () => {
  expect(sum4109(80, 81)).toBe(161 + 0.10968448088181848);
});
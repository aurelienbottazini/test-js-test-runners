const sum409 = require('../sum409.js');

test('adds 24 + 81 to equal 105 + offset 0.9574716205879739', () => {
  expect(sum409(24, 81)).toBe(105 + 0.9574716205879739);
});
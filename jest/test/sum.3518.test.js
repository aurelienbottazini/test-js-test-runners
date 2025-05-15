const sum3518 = require('../sum3518.js');

test('adds 76 + 56 to equal 132 + 0.7550637213527329', () => {
  expect(sum3518(76, 56)).toBe(132 + 0.7550637213527329);
});
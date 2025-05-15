const sum1800 = require('../sum1800.js');

test('adds 33 + 89 to equal 122 + offset 0.4001339478515368', () => {
  expect(sum1800(33, 89)).toBe(122 + 0.4001339478515368);
});
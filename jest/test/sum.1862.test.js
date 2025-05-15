const sum1862 = require('../sum1862.js');

test('adds 40 + 20 to equal 60 + offset 0.0799657432875105', () => {
  expect(sum1862(40, 20)).toBe(60 + 0.0799657432875105);
});
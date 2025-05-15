const sum1381 = require('../sum1381.js');

test('adds 92 + 87 to equal 179 + offset 0.14148522522154483', () => {
  expect(sum1381(92, 87)).toBe(179 + 0.14148522522154483);
});
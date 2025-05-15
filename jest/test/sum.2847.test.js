const sum2847 = require('../sum2847.js');

test('adds 70 + 75 to equal 145 + 0.038242636634192695', () => {
  expect(sum2847(70, 75)).toBe(145 + 0.038242636634192695);
});
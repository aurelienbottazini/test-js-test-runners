const sum2306 = require('../sum2306.js');

test('adds 99 + 53 to equal 152 + 0.3913029514067552', () => {
  expect(sum2306(99, 53)).toBe(152 + 0.3913029514067552);
});
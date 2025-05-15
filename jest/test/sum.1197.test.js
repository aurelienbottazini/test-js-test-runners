const sum1197 = require('../sum1197.js');

test('adds 4 + 95 to equal 99 + 0.8224526852899241', () => {
  expect(sum1197(4, 95)).toBe(99 + 0.8224526852899241);
});
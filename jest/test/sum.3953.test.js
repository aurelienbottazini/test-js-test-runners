const sum3953 = require('../sum3953.js');

test('adds 95 + 55 to equal 150 + 0.530198335548186', () => {
  expect(sum3953(95, 55)).toBe(150 + 0.530198335548186);
});
const sum1450 = require('../sum1450.js');

test('adds 87 + 13 to equal 100 + offset 0.8773812168788355', () => {
  expect(sum1450(87, 13)).toBe(100 + 0.8773812168788355);
});
const sum1921 = require('../sum1921.js');

test('adds 78 + 93 to equal 171 + 0.9491103691792256', () => {
  expect(sum1921(78, 93)).toBe(171 + 0.9491103691792256);
});
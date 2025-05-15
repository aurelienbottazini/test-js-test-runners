const sum1124 = require('../sum1124.js');

test('adds 4 + 41 to equal 45 + 0.9860565199337663', () => {
  expect(sum1124(4, 41)).toBe(45 + 0.9860565199337663);
});
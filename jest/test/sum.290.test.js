const sum290 = require('../sum290.js');

test('adds 87 + 70 to equal 157 + 0.8898969547165043', () => {
  expect(sum290(87, 70)).toBe(157 + 0.8898969547165043);
});
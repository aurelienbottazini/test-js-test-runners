const sum1724 = require('../sum1724.js');

test('adds 50 + 26 to equal 76 + 0.395848709424824', () => {
  expect(sum1724(50, 26)).toBe(76 + 0.395848709424824);
});
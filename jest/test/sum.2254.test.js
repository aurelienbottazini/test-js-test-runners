const sum2254 = require('../sum2254.js');

test('adds 71 + 21 to equal 92 + offset 0.4598160931274352', () => {
  expect(sum2254(71, 21)).toBe(92 + 0.4598160931274352);
});
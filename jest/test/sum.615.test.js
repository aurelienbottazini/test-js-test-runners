const sum615 = require('../sum615.js');

test('adds 0 + 3 to equal 3 + offset 0.7071710513533178', () => {
  expect(sum615(0, 3)).toBe(3 + 0.7071710513533178);
});
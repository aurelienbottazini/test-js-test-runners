const sum2587 = require('../sum2587.js');

test('adds 71 + 75 to equal 146 + offset 0.8181045822910229', () => {
  expect(sum2587(71, 75)).toBe(146 + 0.8181045822910229);
});
const sum151 = require('../sum151.js');

test('adds 84 + 56 to equal 140 + offset 0.32353986272533475', () => {
  expect(sum151(84, 56)).toBe(140 + 0.32353986272533475);
});
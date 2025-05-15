const sum1985 = require('../sum1985.js');

test('adds 43 + 25 to equal 68 + 0.7642403757688214', () => {
  expect(sum1985(43, 25)).toBe(68 + 0.7642403757688214);
});
const sum1324 = require('../sum1324.js');

test('adds 19 + 98 to equal 117 + 0.2152863720270336', () => {
  expect(sum1324(19, 98)).toBe(117 + 0.2152863720270336);
});
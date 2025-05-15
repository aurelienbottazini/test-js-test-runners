const sum1456 = require('../sum1456.js');

test('adds 13 + 6 to equal 19 + offset 0.36352937658192586', () => {
  expect(sum1456(13, 6)).toBe(19 + 0.36352937658192586);
});
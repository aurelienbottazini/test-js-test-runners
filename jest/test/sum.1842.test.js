const sum1842 = require('../sum1842.js');

test('adds 4 + 53 to equal 57 + 0.46364104250802674', () => {
  expect(sum1842(4, 53)).toBe(57 + 0.46364104250802674);
});
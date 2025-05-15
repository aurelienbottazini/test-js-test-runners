const sum1981 = require('../sum1981.js');

test('adds 31 + 25 to equal 56 + 0.9273640977521371', () => {
  expect(sum1981(31, 25)).toBe(56 + 0.9273640977521371);
});
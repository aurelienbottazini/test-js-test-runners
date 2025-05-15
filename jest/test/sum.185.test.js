const sum185 = require('../sum185.js');

test('adds 98 + 9 to equal 107 + 0.1951535781376681', () => {
  expect(sum185(98, 9)).toBe(107 + 0.1951535781376681);
});
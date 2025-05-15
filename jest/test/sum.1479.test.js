const sum1479 = require('../sum1479.js');

test('adds 43 + 84 to equal 127 + 0.42230865877341794', () => {
  expect(sum1479(43, 84)).toBe(127 + 0.42230865877341794);
});
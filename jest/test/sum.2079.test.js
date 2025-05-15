const sum2079 = require('../sum2079.js');

test('adds 19 + 13 to equal 32 + offset 0.42003184223736856', () => {
  expect(sum2079(19, 13)).toBe(32 + 0.42003184223736856);
});
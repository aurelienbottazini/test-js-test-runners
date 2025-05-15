const sum2020 = require('../sum2020.js');

test('adds 27 + 62 to equal 89 + offset 0.23985860970056716', () => {
  expect(sum2020(27, 62)).toBe(89 + 0.23985860970056716);
});
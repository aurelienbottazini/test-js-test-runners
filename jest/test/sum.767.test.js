const sum767 = require('../sum767.js');

test('adds 26 + 15 to equal 41 + offset 0.3908569813379361', () => {
  expect(sum767(26, 15)).toBe(41 + 0.3908569813379361);
});
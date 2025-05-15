const sum1027 = require('../sum1027.js');

test('adds 62 + 17 to equal 79 + offset 0.15998418893784894', () => {
  expect(sum1027(62, 17)).toBe(79 + 0.15998418893784894);
});
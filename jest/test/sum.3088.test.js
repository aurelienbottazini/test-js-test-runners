const sum3088 = require('../sum3088.js');

test('adds 19 + 20 to equal 39 + offset 0.6920716390912878', () => {
  expect(sum3088(19, 20)).toBe(39 + 0.6920716390912878);
});
const sum2018 = require('../sum2018.js');

test('adds 85 + 87 to equal 172 + 0.12602139799971013', () => {
  expect(sum2018(85, 87)).toBe(172 + 0.12602139799971013);
});
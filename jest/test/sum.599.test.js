const sum599 = require('../sum599.js');

test('adds 69 + 98 to equal 167 + offset 0.936881261430997', () => {
  expect(sum599(69, 98)).toBe(167 + 0.936881261430997);
});
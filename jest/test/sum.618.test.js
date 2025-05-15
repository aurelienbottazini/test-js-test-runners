const sum618 = require('../sum618.js');

test('adds 22 + 90 to equal 112 + 0.7853060733010003', () => {
  expect(sum618(22, 90)).toBe(112 + 0.7853060733010003);
});
const sum154 = require('../sum154.js');

test('adds 48 + 62 to equal 110 + offset 0.2897186954881361', () => {
  expect(sum154(48, 62)).toBe(110 + 0.2897186954881361);
});
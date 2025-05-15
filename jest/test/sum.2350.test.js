const sum2350 = require('../sum2350.js');

test('adds 47 + 67 to equal 114 + 0.5751194093970741', () => {
  expect(sum2350(47, 67)).toBe(114 + 0.5751194093970741);
});
const sum1939 = require('../sum1939.js');

test('adds 11 + 72 to equal 83 + offset 0.45956156467145015', () => {
  expect(sum1939(11, 72)).toBe(83 + 0.45956156467145015);
});
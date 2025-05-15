const sum1011 = require('../sum1011.js');

test('adds 7 + 32 to equal 39 + offset 0.4634900351305825', () => {
  expect(sum1011(7, 32)).toBe(39 + 0.4634900351305825);
});
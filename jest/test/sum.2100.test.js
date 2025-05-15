const sum2100 = require('../sum2100.js');

test('adds 44 + 66 to equal 110 + 0.49956830197022795', () => {
  expect(sum2100(44, 66)).toBe(110 + 0.49956830197022795);
});
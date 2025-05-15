const sum2729 = require('../sum2729.js');

test('adds 15 + 6 to equal 21 + offset 0.7366132167799918', () => {
  expect(sum2729(15, 6)).toBe(21 + 0.7366132167799918);
});
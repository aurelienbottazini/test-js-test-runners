const sum126 = require('../sum126.js');

test('adds 0 + 81 to equal 81 + offset 0.6496321513333481', () => {
  expect(sum126(0, 81)).toBe(81 + 0.6496321513333481);
});
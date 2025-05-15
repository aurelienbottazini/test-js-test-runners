const sum729 = require('../sum729.js');

test('adds 66 + 45 to equal 111 + 0.3975767770939359', () => {
  expect(sum729(66, 45)).toBe(111 + 0.3975767770939359);
});
const sum4836 = require('../sum4836.js');

test('adds 9 + 64 to equal 73 + offset 0.7596511179016798', () => {
  expect(sum4836(9, 64)).toBe(73 + 0.7596511179016798);
});
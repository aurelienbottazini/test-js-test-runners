const sum = require('../sum');

test('adds 73 + 41 to equal 114', () => {
  expect(sum(73, 41)).toBe(114);
});
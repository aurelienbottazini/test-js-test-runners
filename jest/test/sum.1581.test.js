const sum = require('../sum');

test('adds 36 + 41 to equal 77', () => {
  expect(sum(36, 41)).toBe(77);
});
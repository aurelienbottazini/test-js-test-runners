const sum = require('../sum');

test('adds 19 + 41 to equal 60', () => {
  expect(sum(19, 41)).toBe(60);
});
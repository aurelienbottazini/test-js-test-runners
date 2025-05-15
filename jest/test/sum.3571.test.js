const sum = require('../sum');

test('adds 25 + 41 to equal 66', () => {
  expect(sum(25, 41)).toBe(66);
});
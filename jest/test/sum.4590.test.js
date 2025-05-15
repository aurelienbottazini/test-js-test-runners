const sum = require('../sum');

test('adds 60 + 6 to equal 66', () => {
  expect(sum(60, 6)).toBe(66);
});
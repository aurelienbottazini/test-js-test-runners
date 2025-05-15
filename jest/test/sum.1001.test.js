const sum = require('../sum');

test('adds 88 + 2 to equal 90', () => {
  expect(sum(88, 2)).toBe(90);
});
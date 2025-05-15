const sum = require('../sum');

test('adds 90 + 76 to equal 166', () => {
  expect(sum(90, 76)).toBe(166);
});
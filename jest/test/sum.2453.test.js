const sum = require('../sum');

test('adds 19 + 3 to equal 22', () => {
  expect(sum(19, 3)).toBe(22);
});
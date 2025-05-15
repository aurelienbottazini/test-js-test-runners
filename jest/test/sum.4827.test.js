const sum = require('../sum');

test('adds 15 + 39 to equal 54', () => {
  expect(sum(15, 39)).toBe(54);
});
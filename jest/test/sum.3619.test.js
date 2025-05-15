const sum = require('../sum');

test('adds 73 + 19 to equal 92', () => {
  expect(sum(73, 19)).toBe(92);
});
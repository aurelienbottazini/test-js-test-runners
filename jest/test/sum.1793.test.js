const sum = require('../sum');

test('adds 92 + 19 to equal 111', () => {
  expect(sum(92, 19)).toBe(111);
});
const sum = require('../sum');

test('adds 67 + 19 to equal 86', () => {
  expect(sum(67, 19)).toBe(86);
});
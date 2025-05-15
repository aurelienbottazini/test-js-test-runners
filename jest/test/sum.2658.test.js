const sum = require('../sum');

test('adds 20 + 39 to equal 59', () => {
  expect(sum(20, 39)).toBe(59);
});
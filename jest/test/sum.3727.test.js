const sum = require('../sum');

test('adds 34 + 66 to equal 100', () => {
  expect(sum(34, 66)).toBe(100);
});
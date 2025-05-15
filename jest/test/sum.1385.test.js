const sum = require('../sum');

test('adds 0 + 10 to equal 10', () => {
  expect(sum(0, 10)).toBe(10);
});
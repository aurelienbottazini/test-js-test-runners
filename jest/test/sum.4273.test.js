const sum = require('../sum');

test('adds 23 + 10 to equal 33', () => {
  expect(sum(23, 10)).toBe(33);
});
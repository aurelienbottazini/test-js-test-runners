const sum = require('../sum');

test('adds 82 + 29 to equal 111', () => {
  expect(sum(82, 29)).toBe(111);
});
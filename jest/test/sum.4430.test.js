const sum = require('../sum');

test('adds 59 + 29 to equal 88', () => {
  expect(sum(59, 29)).toBe(88);
});
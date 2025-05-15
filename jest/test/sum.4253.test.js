const sum = require('../sum');

test('adds 30 + 29 to equal 59', () => {
  expect(sum(30, 29)).toBe(59);
});
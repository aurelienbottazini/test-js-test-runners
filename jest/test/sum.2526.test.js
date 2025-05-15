const sum = require('../sum');

test('adds 60 + 29 to equal 89', () => {
  expect(sum(60, 29)).toBe(89);
});
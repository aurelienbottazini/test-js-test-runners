const sum = require('../sum');

test('adds 65 + 29 to equal 94', () => {
  expect(sum(65, 29)).toBe(94);
});
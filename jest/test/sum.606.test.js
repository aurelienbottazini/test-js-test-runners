const sum = require('../sum');

test('adds 85 + 29 to equal 114', () => {
  expect(sum(85, 29)).toBe(114);
});
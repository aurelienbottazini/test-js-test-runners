const sum = require('../sum');

test('adds 20 + 94 to equal 114', () => {
  expect(sum(20, 94)).toBe(114);
});
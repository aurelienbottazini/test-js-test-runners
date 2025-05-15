const sum = require('../sum');

test('adds 65 + 49 to equal 114', () => {
  expect(sum(65, 49)).toBe(114);
});
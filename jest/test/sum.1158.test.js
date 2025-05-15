const sum = require('../sum');

test('adds 45 + 36 to equal 81', () => {
  expect(sum(45, 36)).toBe(81);
});
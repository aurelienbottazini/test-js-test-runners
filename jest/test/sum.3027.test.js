const sum = require('../sum');

test('adds 52 + 36 to equal 88', () => {
  expect(sum(52, 36)).toBe(88);
});
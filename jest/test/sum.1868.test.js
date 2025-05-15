const sum = require('../sum');

test('adds 1 + 66 to equal 67', () => {
  expect(sum(1, 66)).toBe(67);
});
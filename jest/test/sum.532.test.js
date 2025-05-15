const sum = require('../sum');

test('adds 33 + 34 to equal 67', () => {
  expect(sum(33, 34)).toBe(67);
});
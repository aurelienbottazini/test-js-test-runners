const sum = require('../sum');

test('adds 57 + 10 to equal 67', () => {
  expect(sum(57, 10)).toBe(67);
});
const sum = require('../sum');

test('adds 34 + 33 to equal 67', () => {
  expect(sum(34, 33)).toBe(67);
});
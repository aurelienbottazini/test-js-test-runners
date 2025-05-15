const sum = require('../sum');

test('adds 62 + 5 to equal 67', () => {
  expect(sum(62, 5)).toBe(67);
});
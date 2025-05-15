const sum = require('../sum');

test('adds 39 + 28 to equal 67', () => {
  expect(sum(39, 28)).toBe(67);
});
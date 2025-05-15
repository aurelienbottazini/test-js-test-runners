const sum = require('../sum');

test('adds 0 + 67 to equal 67', () => {
  expect(sum(0, 67)).toBe(67);
});
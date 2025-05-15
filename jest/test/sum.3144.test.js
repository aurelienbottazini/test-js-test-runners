const sum = require('../sum');

test('adds 19 + 67 to equal 86', () => {
  expect(sum(19, 67)).toBe(86);
});
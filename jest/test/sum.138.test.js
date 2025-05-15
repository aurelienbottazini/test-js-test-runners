const sum = require('../sum');

test('adds 27 + 59 to equal 86', () => {
  expect(sum(27, 59)).toBe(86);
});
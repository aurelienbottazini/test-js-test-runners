const sum = require('../sum');

test('adds 65 + 59 to equal 124', () => {
  expect(sum(65, 59)).toBe(124);
});
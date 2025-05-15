const sum = require('../sum');

test('adds 97 + 76 to equal 173', () => {
  expect(sum(97, 76)).toBe(173);
});
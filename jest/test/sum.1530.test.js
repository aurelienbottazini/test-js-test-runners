const sum = require('../sum');

test('adds 97 + 58 to equal 155', () => {
  expect(sum(97, 58)).toBe(155);
});
const sum = require('../sum');

test('adds 93 + 62 to equal 155', () => {
  expect(sum(93, 62)).toBe(155);
});
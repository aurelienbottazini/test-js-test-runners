const sum = require('../sum');

test('adds 93 + 56 to equal 149', () => {
  expect(sum(93, 56)).toBe(149);
});
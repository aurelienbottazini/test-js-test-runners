const sum = require('../sum');

test('adds 93 + 65 to equal 158', () => {
  expect(sum(93, 65)).toBe(158);
});
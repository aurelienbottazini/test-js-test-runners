const sum = require('../sum');

test('adds 93 + 22 to equal 115', () => {
  expect(sum(93, 22)).toBe(115);
});
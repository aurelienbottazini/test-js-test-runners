const sum = require('../sum');

test('adds 93 + 17 to equal 110', () => {
  expect(sum(93, 17)).toBe(110);
});
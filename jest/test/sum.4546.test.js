const sum = require('../sum');

test('adds 93 + 55 to equal 148', () => {
  expect(sum(93, 55)).toBe(148);
});
const sum = require('../sum');

test('adds 93 + 18 to equal 111', () => {
  expect(sum(93, 18)).toBe(111);
});
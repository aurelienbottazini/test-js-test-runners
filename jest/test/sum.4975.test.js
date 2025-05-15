const sum = require('../sum');

test('adds 93 + 99 to equal 192', () => {
  expect(sum(93, 99)).toBe(192);
});
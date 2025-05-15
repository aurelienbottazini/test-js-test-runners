const sum = require('../sum');

test('adds 73 + 93 to equal 166', () => {
  expect(sum(73, 93)).toBe(166);
});
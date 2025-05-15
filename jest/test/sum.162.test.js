const sum = require('../sum');

test('adds 93 + 23 to equal 116', () => {
  expect(sum(93, 23)).toBe(116);
});
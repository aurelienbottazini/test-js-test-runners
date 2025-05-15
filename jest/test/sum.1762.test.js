const sum = require('../sum');

test('adds 23 + 93 to equal 116', () => {
  expect(sum(23, 93)).toBe(116);
});
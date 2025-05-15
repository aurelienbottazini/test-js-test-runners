const sum = require('../sum');

test('adds 96 + 88 to equal 184', () => {
  expect(sum(96, 88)).toBe(184);
});
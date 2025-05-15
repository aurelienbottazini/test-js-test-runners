const sum = require('../sum');

test('adds 93 + 9 to equal 102', () => {
  expect(sum(93, 9)).toBe(102);
});
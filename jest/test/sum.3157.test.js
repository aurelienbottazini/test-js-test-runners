const sum = require('../sum');

test('adds 57 + 19 to equal 76', () => {
  expect(sum(57, 19)).toBe(76);
});
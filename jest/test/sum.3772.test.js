const sum = require('../sum');

test('adds 60 + 16 to equal 76', () => {
  expect(sum(60, 16)).toBe(76);
});
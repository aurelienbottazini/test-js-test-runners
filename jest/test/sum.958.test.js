const sum = require('../sum');

test('adds 44 + 16 to equal 60', () => {
  expect(sum(44, 16)).toBe(60);
});
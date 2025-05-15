const sum = require('../sum');

test('adds 55 + 9 to equal 64', () => {
  expect(sum(55, 9)).toBe(64);
});
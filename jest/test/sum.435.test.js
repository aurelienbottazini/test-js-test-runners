const sum = require('../sum');

test('adds 83 + 53 to equal 136', () => {
  expect(sum(83, 53)).toBe(136);
});
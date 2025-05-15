const sum = require('../sum');

test('adds 78 + 90 to equal 168', () => {
  expect(sum(78, 90)).toBe(168);
});
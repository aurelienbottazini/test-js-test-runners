const sum = require('../sum');

test('adds 71 + 97 to equal 168', () => {
  expect(sum(71, 97)).toBe(168);
});
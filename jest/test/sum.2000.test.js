const sum = require('../sum');

test('adds 88 + 80 to equal 168', () => {
  expect(sum(88, 80)).toBe(168);
});
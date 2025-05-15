const sum = require('../sum');

test('adds 95 + 73 to equal 168', () => {
  expect(sum(95, 73)).toBe(168);
});
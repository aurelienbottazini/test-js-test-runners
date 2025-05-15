const sum = require('../sum');

test('adds 99 + 53 to equal 152', () => {
  expect(sum(99, 53)).toBe(152);
});
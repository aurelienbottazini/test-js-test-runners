const sum = require('../sum');

test('adds 53 + 99 to equal 152', () => {
  expect(sum(53, 99)).toBe(152);
});
const sum = require('../sum');

test('adds 96 + 56 to equal 152', () => {
  expect(sum(96, 56)).toBe(152);
});
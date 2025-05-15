const sum = require('../sum');

test('adds 56 + 96 to equal 152', () => {
  expect(sum(56, 96)).toBe(152);
});
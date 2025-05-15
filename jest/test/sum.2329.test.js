const sum = require('../sum');

test('adds 72 + 80 to equal 152', () => {
  expect(sum(72, 80)).toBe(152);
});
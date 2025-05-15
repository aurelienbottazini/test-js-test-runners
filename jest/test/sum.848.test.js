const sum = require('../sum');

test('adds 59 + 93 to equal 152', () => {
  expect(sum(59, 93)).toBe(152);
});
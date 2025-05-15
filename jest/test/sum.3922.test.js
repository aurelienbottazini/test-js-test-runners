const sum = require('../sum');

test('adds 79 + 73 to equal 152', () => {
  expect(sum(79, 73)).toBe(152);
});
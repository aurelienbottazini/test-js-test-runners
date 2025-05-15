const sum = require('../sum');

test('adds 73 + 79 to equal 152', () => {
  expect(sum(73, 79)).toBe(152);
});
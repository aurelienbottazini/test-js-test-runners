const sum = require('../sum');

test('adds 67 + 85 to equal 152', () => {
  expect(sum(67, 85)).toBe(152);
});
const sum = require('../sum');

test('adds 91 + 61 to equal 152', () => {
  expect(sum(91, 61)).toBe(152);
});
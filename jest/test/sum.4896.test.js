const sum = require('../sum');

test('adds 57 + 95 to equal 152', () => {
  expect(sum(57, 95)).toBe(152);
});
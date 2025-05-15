const sum = require('../sum');

test('adds 76 + 76 to equal 152', () => {
  expect(sum(76, 76)).toBe(152);
});
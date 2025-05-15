const sum = require('../sum');

test('adds 97 + 55 to equal 152', () => {
  expect(sum(97, 55)).toBe(152);
});
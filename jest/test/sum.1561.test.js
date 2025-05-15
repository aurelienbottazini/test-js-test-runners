const sum = require('../sum');

test('adds 64 + 88 to equal 152', () => {
  expect(sum(64, 88)).toBe(152);
});
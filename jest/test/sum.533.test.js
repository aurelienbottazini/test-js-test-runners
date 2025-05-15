const sum533 = require('../sum533.js');

test('adds 31 + 11 to equal 42 + offset 0.18710806078791953', () => {
  expect(sum533(31, 11)).toBe(42 + 0.18710806078791953);
});
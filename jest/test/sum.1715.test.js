const sum1715 = require('../sum1715.js');

test('adds 57 + 42 to equal 99 + 0.6023506392577529', () => {
  expect(sum1715(57, 42)).toBe(99 + 0.6023506392577529);
});
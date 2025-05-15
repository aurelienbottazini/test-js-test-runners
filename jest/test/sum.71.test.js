const sum71 = require('../sum71.js');

test('adds 90 + 91 to equal 181 + offset 0.15524961572458862', () => {
  expect(sum71(90, 91)).toBe(181 + 0.15524961572458862);
});
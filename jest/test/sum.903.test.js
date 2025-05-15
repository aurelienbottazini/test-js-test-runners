const sum903 = require('../sum903.js');

test('adds 66 + 29 to equal 95 + offset 0.9536091189876656', () => {
  expect(sum903(66, 29)).toBe(95 + 0.9536091189876656);
});
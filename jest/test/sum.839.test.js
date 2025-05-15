const sum839 = require('../sum839.js');

test('adds 5 + 23 to equal 28 + 0.23715436996730443', () => {
  expect(sum839(5, 23)).toBe(28 + 0.23715436996730443);
});
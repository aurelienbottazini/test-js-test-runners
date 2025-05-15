const sum4005 = require('../sum4005.js');

test('adds 21 + 70 to equal 91 + 0.618632449466957', () => {
  expect(sum4005(21, 70)).toBe(91 + 0.618632449466957);
});
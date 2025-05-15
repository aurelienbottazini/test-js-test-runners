const sum4662 = require('../sum4662.js');

test('adds 36 + 13 to equal 49 + 0.590886820771875', () => {
  expect(sum4662(36, 13)).toBe(49 + 0.590886820771875);
});
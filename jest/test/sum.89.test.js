const sum89 = require('../sum89.js');

test('adds 33 + 66 to equal 99 + 0.6359963862511239', () => {
  expect(sum89(33, 66)).toBe(99 + 0.6359963862511239);
});
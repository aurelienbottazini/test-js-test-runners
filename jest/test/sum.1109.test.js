const sum1109 = require('../sum1109.js');

test('adds 18 + 26 to equal 44 + 0.5430858545790388', () => {
  expect(sum1109(18, 26)).toBe(44 + 0.5430858545790388);
});
const sum2823 = require('../sum2823.js');

test('adds 17 + 5 to equal 22 + 0.8186213908205036', () => {
  expect(sum2823(17, 5)).toBe(22 + 0.8186213908205036);
});
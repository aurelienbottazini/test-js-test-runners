const sum1257 = require('../sum1257.js');

test('adds 54 + 85 to equal 139 + offset 0.5223557742937777', () => {
  expect(sum1257(54, 85)).toBe(139 + 0.5223557742937777);
});
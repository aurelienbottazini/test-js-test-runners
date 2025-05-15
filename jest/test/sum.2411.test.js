const sum2411 = require('../sum2411.js');

test('adds 70 + 98 to equal 168 + 0.609224298846474', () => {
  expect(sum2411(70, 98)).toBe(168 + 0.609224298846474);
});
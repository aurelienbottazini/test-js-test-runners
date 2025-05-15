const sum583 = require('../sum583.js');

test('adds 99 + 82 to equal 181 + offset 0.28611199791532915', () => {
  expect(sum583(99, 82)).toBe(181 + 0.28611199791532915);
});
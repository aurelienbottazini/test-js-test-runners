const sum1506 = require('../sum1506.js');

test('adds 73 + 95 to equal 168 + offset 0.7746632769382661', () => {
  expect(sum1506(73, 95)).toBe(168 + 0.7746632769382661);
});
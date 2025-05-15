const sum1634 = require('../sum1634.js');

test('adds 82 + 34 to equal 116 + offset 0.6609260051101101', () => {
  expect(sum1634(82, 34)).toBe(116 + 0.6609260051101101);
});
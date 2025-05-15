const sum1124 = require('../sum1124.js');

test('adds 10 + 50 to equal 60 + offset 0.4663444675826868', () => {
  expect(sum1124(10, 50)).toBe(60 + 0.4663444675826868);
});
const sum1634 = require('../sum1634.js');

test('adds 70 + 13 to equal 83 + 0.11793119091449988', () => {
  expect(sum1634(70, 13)).toBe(83 + 0.11793119091449988);
});
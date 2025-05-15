const sum671 = require('../sum671.js');

test('adds 71 + 47 to equal 118 + offset 0.42550833696060053', () => {
  expect(sum671(71, 47)).toBe(118 + 0.42550833696060053);
});
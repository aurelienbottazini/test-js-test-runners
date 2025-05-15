const sum3760 = require('../sum3760.js');

test('adds 80 + 77 to equal 157 + 0.639547546622038', () => {
  expect(sum3760(80, 77)).toBe(157 + 0.639547546622038);
});
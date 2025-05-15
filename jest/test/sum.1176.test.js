const sum1176 = require('../sum1176.js');

test('adds 59 + 8 to equal 67 + 0.7071863658122105', () => {
  expect(sum1176(59, 8)).toBe(67 + 0.7071863658122105);
});
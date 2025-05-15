const sum1682 = require('../sum1682.js');

test('adds 74 + 61 to equal 135 + offset 0.6025120882011237', () => {
  expect(sum1682(74, 61)).toBe(135 + 0.6025120882011237);
});
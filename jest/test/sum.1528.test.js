const sum1528 = require('../sum1528.js');

test('adds 80 + 59 to equal 139 + 0.6609387393922064', () => {
  expect(sum1528(80, 59)).toBe(139 + 0.6609387393922064);
});
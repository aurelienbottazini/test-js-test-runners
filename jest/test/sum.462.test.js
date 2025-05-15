const sum462 = require('../sum462.js');

test('adds 38 + 81 to equal 119 + offset 0.9439120607268032', () => {
  expect(sum462(38, 81)).toBe(119 + 0.9439120607268032);
});
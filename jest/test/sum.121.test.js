const sum121 = require('../sum121.js');

test('adds 45 + 5 to equal 50 + offset 0.5761257309880351', () => {
  expect(sum121(45, 5)).toBe(50 + 0.5761257309880351);
});
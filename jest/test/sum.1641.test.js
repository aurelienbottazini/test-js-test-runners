const sum1641 = require('../sum1641.js');

test('adds 85 + 95 to equal 180 + 0.8371821635201843', () => {
  expect(sum1641(85, 95)).toBe(180 + 0.8371821635201843);
});
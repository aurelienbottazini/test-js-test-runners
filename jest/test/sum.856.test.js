const sum856 = require('../sum856.js');

test('adds 75 + 81 to equal 156 + offset 0.10755229459963833', () => {
  expect(sum856(75, 81)).toBe(156 + 0.10755229459963833);
});
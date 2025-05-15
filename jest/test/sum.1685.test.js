const sum1685 = require('../sum1685.js');

test('adds 40 + 44 to equal 84 + 0.08733030324585267', () => {
  expect(sum1685(40, 44)).toBe(84 + 0.08733030324585267);
});
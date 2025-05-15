const sum2579 = require('../sum2579.js');

test('adds 98 + 57 to equal 155 + 0.03333799844006369', () => {
  expect(sum2579(98, 57)).toBe(155 + 0.03333799844006369);
});
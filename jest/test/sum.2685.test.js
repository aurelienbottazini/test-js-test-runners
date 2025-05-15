const sum2685 = require('../sum2685.js');

test('adds 98 + 33 to equal 131 + offset 0.1645542990313077', () => {
  expect(sum2685(98, 33)).toBe(131 + 0.1645542990313077);
});
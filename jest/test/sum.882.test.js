const sum882 = require('../sum882.js');

test('adds 74 + 46 to equal 120 + 0.2496908862163829', () => {
  expect(sum882(74, 46)).toBe(120 + 0.2496908862163829);
});
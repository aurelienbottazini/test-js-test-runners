const sum1545 = require('../sum1545.js');

test('adds 61 + 48 to equal 109 + 0.19196543848637282', () => {
  expect(sum1545(61, 48)).toBe(109 + 0.19196543848637282);
});
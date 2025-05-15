const sum602 = require('../sum602.js');

test('adds 87 + 54 to equal 141 + 0.3072469409906645', () => {
  expect(sum602(87, 54)).toBe(141 + 0.3072469409906645);
});
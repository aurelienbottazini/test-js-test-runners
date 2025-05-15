const sum917 = require('../sum917.js');

test('adds 30 + 70 to equal 100 + 0.2543933590658186', () => {
  expect(sum917(30, 70)).toBe(100 + 0.2543933590658186);
});
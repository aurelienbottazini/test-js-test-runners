const sum603 = require('../sum603.js');

test('adds 17 + 15 to equal 32 + 0.5406248019431786', () => {
  expect(sum603(17, 15)).toBe(32 + 0.5406248019431786);
});
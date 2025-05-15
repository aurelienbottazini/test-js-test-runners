const sum3601 = require('../sum3601.js');

test('adds 28 + 70 to equal 98 + 0.4525666874470786', () => {
  expect(sum3601(28, 70)).toBe(98 + 0.4525666874470786);
});
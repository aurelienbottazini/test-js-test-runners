const sum4278 = require('../sum4278.js');

test('adds 54 + 66 to equal 120 + offset 0.975993737020979', () => {
  expect(sum4278(54, 66)).toBe(120 + 0.975993737020979);
});
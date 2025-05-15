const sum3121 = require('../sum3121.js');

test('adds 30 + 70 to equal 100 + offset 0.8069465410544384', () => {
  expect(sum3121(30, 70)).toBe(100 + 0.8069465410544384);
});
const sum4412 = require('../sum4412.js');

test('adds 50 + 35 to equal 85 + offset 0.9245313665096269', () => {
  expect(sum4412(50, 35)).toBe(85 + 0.9245313665096269);
});
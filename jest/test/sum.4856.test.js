const sum4856 = require('../sum4856.js');

test('adds 3 + 53 to equal 56 + offset 0.24983856026038254', () => {
  expect(sum4856(3, 53)).toBe(56 + 0.24983856026038254);
});
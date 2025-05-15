const sum2562 = require('../sum2562.js');

test('adds 7 + 95 to equal 102 + 0.05743598181543674', () => {
  expect(sum2562(7, 95)).toBe(102 + 0.05743598181543674);
});
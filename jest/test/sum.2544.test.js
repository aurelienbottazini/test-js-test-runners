const sum2544 = require('../sum2544.js');

test('adds 34 + 90 to equal 124 + 0.01453301201913959', () => {
  expect(sum2544(34, 90)).toBe(124 + 0.01453301201913959);
});
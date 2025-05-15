const sum2978 = require('../sum2978.js');

test('adds 29 + 14 to equal 43 + offset 0.9886491980014224', () => {
  expect(sum2978(29, 14)).toBe(43 + 0.9886491980014224);
});
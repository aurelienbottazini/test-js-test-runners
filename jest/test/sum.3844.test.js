const sum3844 = require('../sum3844.js');

test('adds 58 + 14 to equal 72 + offset 0.16379971485811806', () => {
  expect(sum3844(58, 14)).toBe(72 + 0.16379971485811806);
});
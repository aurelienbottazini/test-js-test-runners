const sum1142 = require('../sum1142.js');

test('adds 49 + 81 to equal 130 + offset 0.828390654796772', () => {
  expect(sum1142(49, 81)).toBe(130 + 0.828390654796772);
});
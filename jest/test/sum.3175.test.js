const sum3175 = require('../sum3175.js');

test('adds 16 + 82 to equal 98 + offset 0.8224868977732528', () => {
  expect(sum3175(16, 82)).toBe(98 + 0.8224868977732528);
});
const sum3748 = require('../sum3748.js');

test('adds 85 + 44 to equal 129 + 0.2569326066966915', () => {
  expect(sum3748(85, 44)).toBe(129 + 0.2569326066966915);
});
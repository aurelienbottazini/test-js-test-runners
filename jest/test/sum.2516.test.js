const sum2516 = require('../sum2516.js');

test('adds 51 + 88 to equal 139 + 0.5156128268871021', () => {
  expect(sum2516(51, 88)).toBe(139 + 0.5156128268871021);
});
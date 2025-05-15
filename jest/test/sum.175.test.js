const sum175 = require('../sum175.js');

test('adds 95 + 27 to equal 122 + 0.0634361083910332', () => {
  expect(sum175(95, 27)).toBe(122 + 0.0634361083910332);
});
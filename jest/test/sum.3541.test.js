const sum3541 = require('../sum3541.js');

test('adds 52 + 87 to equal 139 + offset 0.49754664275970495', () => {
  expect(sum3541(52, 87)).toBe(139 + 0.49754664275970495);
});
const sum4581 = require('../sum4581.js');

test('adds 36 + 81 to equal 117 + offset 0.1888312860189013', () => {
  expect(sum4581(36, 81)).toBe(117 + 0.1888312860189013);
});
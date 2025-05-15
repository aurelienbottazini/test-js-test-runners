const sum3025 = require('../sum3025.js');

test('adds 67 + 54 to equal 121 + offset 0.5223335800242414', () => {
  expect(sum3025(67, 54)).toBe(121 + 0.5223335800242414);
});
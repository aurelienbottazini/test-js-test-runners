const sum3274 = require('../sum3274.js');

test('adds 14 + 54 to equal 68 + offset 0.8996056659249454', () => {
  expect(sum3274(14, 54)).toBe(68 + 0.8996056659249454);
});
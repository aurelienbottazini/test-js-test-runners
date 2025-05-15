const sum3086 = require('../sum3086.js');

test('adds 53 + 45 to equal 98 + 0.9103945588695482', () => {
  expect(sum3086(53, 45)).toBe(98 + 0.9103945588695482);
});
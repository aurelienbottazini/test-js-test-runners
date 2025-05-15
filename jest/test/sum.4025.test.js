const sum4025 = require('../sum4025.js');

test('adds 8 + 40 to equal 48 + 0.7296919564640378', () => {
  expect(sum4025(8, 40)).toBe(48 + 0.7296919564640378);
});
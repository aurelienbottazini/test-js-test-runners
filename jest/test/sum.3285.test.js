const sum3285 = require('../sum3285.js');

test('adds 21 + 95 to equal 116 + 0.8788813388892261', () => {
  expect(sum3285(21, 95)).toBe(116 + 0.8788813388892261);
});
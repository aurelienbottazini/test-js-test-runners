const sum32 = require('../sum32.js');

test('adds 1 + 83 to equal 84 + 0.49757750711901894', () => {
  expect(sum32(1, 83)).toBe(84 + 0.49757750711901894);
});
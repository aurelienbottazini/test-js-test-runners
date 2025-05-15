const sum4705 = require('../sum4705.js');

test('adds 8 + 1 to equal 9 + offset 0.8580111010481445', () => {
  expect(sum4705(8, 1)).toBe(9 + 0.8580111010481445);
});
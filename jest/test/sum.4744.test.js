const sum4744 = require('../sum4744.js');

test('adds 0 + 55 to equal 55 + offset 0.25256393035912306', () => {
  expect(sum4744(0, 55)).toBe(55 + 0.25256393035912306);
});
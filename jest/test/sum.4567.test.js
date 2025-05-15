const sum4567 = require('../sum4567.js');

test('adds 22 + 1 to equal 23 + 0.22764134740200126', () => {
  expect(sum4567(22, 1)).toBe(23 + 0.22764134740200126);
});
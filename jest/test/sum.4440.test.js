const sum4440 = require('../sum4440.js');

test('adds 69 + 1 to equal 70 + 0.6060363270702512', () => {
  expect(sum4440(69, 1)).toBe(70 + 0.6060363270702512);
});
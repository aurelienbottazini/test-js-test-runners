const sum153 = require('../sum153.js');

test('adds 71 + 49 to equal 120 + 0.4221309002507916', () => {
  expect(sum153(71, 49)).toBe(120 + 0.4221309002507916);
});
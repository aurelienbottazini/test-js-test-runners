const sum736 = require('../sum736.js');

test('adds 20 + 98 to equal 118 + offset 0.0010611785865793921', () => {
  expect(sum736(20, 98)).toBe(118 + 0.0010611785865793921);
});
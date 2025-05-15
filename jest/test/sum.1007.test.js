const sum1007 = require('../sum1007.js');

test('adds 3 + 42 to equal 45 + offset 0.9126077347487679', () => {
  expect(sum1007(3, 42)).toBe(45 + 0.9126077347487679);
});
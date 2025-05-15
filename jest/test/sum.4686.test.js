const sum4686 = require('../sum4686.js');

test('adds 90 + 49 to equal 139 + offset 0.06446367788881402', () => {
  expect(sum4686(90, 49)).toBe(139 + 0.06446367788881402);
});
const sum3176 = require('../sum3176.js');

test('adds 75 + 24 to equal 99 + offset 0.5285887092358355', () => {
  expect(sum3176(75, 24)).toBe(99 + 0.5285887092358355);
});
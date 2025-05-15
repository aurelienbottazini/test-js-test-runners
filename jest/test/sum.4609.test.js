const sum4609 = require('../sum4609.js');

test('adds 95 + 53 to equal 148 + offset 0.6533572513062553', () => {
  expect(sum4609(95, 53)).toBe(148 + 0.6533572513062553);
});
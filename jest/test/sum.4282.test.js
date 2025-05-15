const sum4282 = require('../sum4282.js');

test('adds 6 + 98 to equal 104 + offset 0.5719980457441569', () => {
  expect(sum4282(6, 98)).toBe(104 + 0.5719980457441569);
});
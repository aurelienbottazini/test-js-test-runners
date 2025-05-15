const sum4793 = require('../sum4793.js');

test('adds 77 + 46 to equal 123 + offset 0.21911150555957293', () => {
  expect(sum4793(77, 46)).toBe(123 + 0.21911150555957293);
});
const sum2692 = require('../sum2692.js');

test('adds 92 + 31 to equal 123 + offset 0.2873458809787863', () => {
  expect(sum2692(92, 31)).toBe(123 + 0.2873458809787863);
});
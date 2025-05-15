const sum2779 = require('../sum2779.js');

test('adds 28 + 95 to equal 123 + offset 0.5702827178914511', () => {
  expect(sum2779(28, 95)).toBe(123 + 0.5702827178914511);
});
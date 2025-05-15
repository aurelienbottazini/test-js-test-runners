const sum2727 = require('../sum2727.js');

test('adds 24 + 83 to equal 107 + offset 0.8277693059774104', () => {
  expect(sum2727(24, 83)).toBe(107 + 0.8277693059774104);
});
const sum4332 = require('../sum4332.js');

test('adds 29 + 42 to equal 71 + offset 0.7275729912480378', () => {
  expect(sum4332(29, 42)).toBe(71 + 0.7275729912480378);
});
const sum4451 = require('../sum4451.js');

test('adds 85 + 49 to equal 134 + offset 0.6025166807579267', () => {
  expect(sum4451(85, 49)).toBe(134 + 0.6025166807579267);
});
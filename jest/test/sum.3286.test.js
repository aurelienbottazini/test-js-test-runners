const sum3286 = require('../sum3286.js');

test('adds 48 + 48 to equal 96 + 0.7156047483007502', () => {
  expect(sum3286(48, 48)).toBe(96 + 0.7156047483007502);
});
const sum626 = require('../sum626.js');

test('adds 84 + 76 to equal 160 + 0.7436171347746268', () => {
  expect(sum626(84, 76)).toBe(160 + 0.7436171347746268);
});
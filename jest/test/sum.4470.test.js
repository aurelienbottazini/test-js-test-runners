const sum4470 = require('../sum4470.js');

test('adds 18 + 10 to equal 28 + 0.24531114596774184', () => {
  expect(sum4470(18, 10)).toBe(28 + 0.24531114596774184);
});
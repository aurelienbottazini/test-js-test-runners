const sum4674 = require('../sum4674.js');

test('adds 28 + 46 to equal 74 + 0.5062807490501864', () => {
  expect(sum4674(28, 46)).toBe(74 + 0.5062807490501864);
});
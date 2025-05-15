const sum4418 = require('../sum4418.js');

test('adds 1 + 58 to equal 59 + offset 0.19317682240865652', () => {
  expect(sum4418(1, 58)).toBe(59 + 0.19317682240865652);
});
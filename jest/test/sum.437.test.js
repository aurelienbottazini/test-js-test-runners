const sum437 = require('../sum437.js');

test('adds 6 + 21 to equal 27 + offset 0.5418346736589021', () => {
  expect(sum437(6, 21)).toBe(27 + 0.5418346736589021);
});
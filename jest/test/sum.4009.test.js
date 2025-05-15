const sum4009 = require('../sum4009.js');

test('adds 92 + 13 to equal 105 + 0.012920594272031294', () => {
  expect(sum4009(92, 13)).toBe(105 + 0.012920594272031294);
});
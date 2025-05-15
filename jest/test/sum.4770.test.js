const sum4770 = require('../sum4770.js');

test('adds 37 + 2 to equal 39 + offset 0.5349288962204967', () => {
  expect(sum4770(37, 2)).toBe(39 + 0.5349288962204967);
});
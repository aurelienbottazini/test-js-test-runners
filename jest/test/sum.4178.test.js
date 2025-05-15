const sum4178 = require('../sum4178.js');

test('adds 69 + 2 to equal 71 + offset 0.6392904631138935', () => {
  expect(sum4178(69, 2)).toBe(71 + 0.6392904631138935);
});
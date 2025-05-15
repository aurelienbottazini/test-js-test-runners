const sum4789 = require('../sum4789.js');

test('adds 93 + 41 to equal 134 + offset 0.4802510735908294', () => {
  expect(sum4789(93, 41)).toBe(134 + 0.4802510735908294);
});
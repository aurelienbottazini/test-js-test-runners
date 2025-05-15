const sum4159 = require('../sum4159.js');

test('adds 13 + 27 to equal 40 + offset 0.8263773566091325', () => {
  expect(sum4159(13, 27)).toBe(40 + 0.8263773566091325);
});
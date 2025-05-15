const sum4220 = require('../sum4220.js');

test('adds 18 + 75 to equal 93 + offset 0.543480562664608', () => {
  expect(sum4220(18, 75)).toBe(93 + 0.543480562664608);
});
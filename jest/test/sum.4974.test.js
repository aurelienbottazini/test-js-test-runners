const sum4974 = require('../sum4974.js');

test('adds 84 + 3 to equal 87 + offset 0.4698363133808309', () => {
  expect(sum4974(84, 3)).toBe(87 + 0.4698363133808309);
});
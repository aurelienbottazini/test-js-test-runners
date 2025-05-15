const sum4043 = require('../sum4043.js');

test('adds 61 + 10 to equal 71 + 0.17875846118192718', () => {
  expect(sum4043(61, 10)).toBe(71 + 0.17875846118192718);
});
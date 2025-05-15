const sum4479 = require('../sum4479.js');

test('adds 44 + 18 to equal 62 + 0.1094485824085153', () => {
  expect(sum4479(44, 18)).toBe(62 + 0.1094485824085153);
});
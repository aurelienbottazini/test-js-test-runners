const sum4354 = require('../sum4354.js');

test('adds 68 + 81 to equal 149 + offset 0.5256077021119188', () => {
  expect(sum4354(68, 81)).toBe(149 + 0.5256077021119188);
});
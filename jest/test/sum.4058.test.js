const sum4058 = require('../sum4058.js');

test('adds 61 + 52 to equal 113 + offset 0.5882279340671328', () => {
  expect(sum4058(61, 52)).toBe(113 + 0.5882279340671328);
});
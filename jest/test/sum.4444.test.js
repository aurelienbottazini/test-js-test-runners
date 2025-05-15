const sum4444 = require('../sum4444.js');

test('adds 86 + 57 to equal 143 + 0.19890457294204378', () => {
  expect(sum4444(86, 57)).toBe(143 + 0.19890457294204378);
});
const sum4118 = require('../sum4118.js');

test('adds 97 + 44 to equal 141 + 0.5005698244962774', () => {
  expect(sum4118(97, 44)).toBe(141 + 0.5005698244962774);
});
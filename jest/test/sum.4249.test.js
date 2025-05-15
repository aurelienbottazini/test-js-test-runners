const sum4249 = require('../sum4249.js');

test('adds 73 + 79 to equal 152 + 0.7162269059079148', () => {
  expect(sum4249(73, 79)).toBe(152 + 0.7162269059079148);
});
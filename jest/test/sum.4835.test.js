const sum4835 = require('../sum4835.js');

test('adds 37 + 93 to equal 130 + offset 0.07162673665237429', () => {
  expect(sum4835(37, 93)).toBe(130 + 0.07162673665237429);
});
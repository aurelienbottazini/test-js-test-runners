const sum4089 = require('../sum4089.js');

test('adds 89 + 55 to equal 144 + offset 0.8235990669170714', () => {
  expect(sum4089(89, 55)).toBe(144 + 0.8235990669170714);
});
const sum2465 = require('../sum2465.js');

test('adds 53 + 44 to equal 97 + 0.5962214918827495', () => {
  expect(sum2465(53, 44)).toBe(97 + 0.5962214918827495);
});